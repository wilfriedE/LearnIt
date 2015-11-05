# coding: utf-8
import logging
from flask.ext import wtf
import flask
import wtforms

from google.appengine.ext import ndb

import auth
import config
import model
import util
import task
import json

from main import app


###############################################################################
# Lesson List
###############################################################################
@app.route('/admin/lesson/')
@auth.admin_required
def lesson_list():
  lesson_dbs = model.Lesson.query().fetch()
  return flask.render_template(
      'lesson/lesson_list.html',
      html_class='user-list',
      title='Lesson List',
      lesson_dbs=lesson_dbs,
      api_url=flask.url_for('api.lesson.list'),
    )

###############################################################################
# Lesson View
###############################################################################
@app.route('/lesson/<lesson_key>/')
@app.route('/course/<course_key>/l/<lesson_key>/')
def lesson(lesson_key, course_key=''):
  display_type = 'lesson'
  course = ''
  lesson = ndb.Key(urlsafe=lesson_key).get()
  if course_key and lesson_key:
    display_type = 'course-lesson'
    course =  ndb.Key(urlsafe=course_key).get()
    
  return flask.render_template(
      'lesson/lesson.html',
      lesson = lesson,
      course = course,
      title= 'Learning',
      html_class='lesson-view',
      display_type=display_type,
    )

@app.route('/card/l/<lesson_id>')
def lesson_card(lesson_id):
  lesson_db = model.Lesson.get_by_id(int(lesson_id)) 
  return flask.render_template(
      'lesson/lesson_card.html',
      title='',
      lesson_db=lesson_db,
      html_class='lesson-card',
    )

###############################################################################
# New Lesson
###############################################################################
class NewLessonForm(wtf.Form):
  name = wtforms.StringField(
      'Name',
      [wtforms.validators.required()], filters=[util.strip_filter],
    )
  topics = wtforms.StringField('Topics')
  description = wtforms.TextAreaField(
      'Description', [wtforms.validators.Length(min=2, max=400)],
    )
  lesson_id = wtforms.HiddenField() #This field is only nesessary when creating a new version of an existing lesson.
  is_a = wtforms.StringField('Content Type', [wtforms.validators.required()])

@app.route('/lesson/create')
@auth.login_required
def new_lesson():
  """Renders the new lesson creation page"""
  form = NewLessonForm()
  return flask.render_template(
      'lesson/lesson_update.html',
      title='New Lesson',
      post_path=flask.url_for('api.lesson.new'),
      form=form,
      html_class='lesson',
    )

##This would be the process where users can propose new versions for a Lesson. These would of course need approval.
@app.route('/lesson/<lesson_id>/propose_update/')
@auth.login_required
def propose_new_lesson_version(lesson_id):
  user_db = auth.current_user_db()
  lesson = model.Lesson.get_by_id(int(lesson_id))
  form = NewLessonForm(name = lesson.name, description = lesson.description,
   topics = ','.join([ key.urlsafe() for key in lesson.topics]), lesson_id = lesson_id,
   is_a = lesson.is_a)
  return flask.render_template(
      'lesson/lesson_update.html',
      title='Lesson Update Proposal',
      post_path=flask.url_for('api.lesson_version.new',lesson_key=lesson.key.urlsafe()),
      form=form,
      lesson_db=lesson,
      html_class='lesson-update-proposal',
    )

@app.route('/admin/lesson/<lesson_id>/update')
@auth.admin_required
def lesson_update(lesson_id):
  user_db = auth.current_user_db()
  lesson = model.Lesson.get_by_id(int(lesson_id))
  form =  NewLessonForm(name = lesson.name, description = lesson.description,
   topics = ','.join([ key.urlsafe() for key in lesson.topics]), lesson_id = lesson_id,
   is_a = lesson.is_a)
  return flask.render_template(
      'lesson/lesson_update.html',
      title='Lesson Update - (Admin Only)',
      post_path=flask.url_for('api.lesson',lesson_key=lesson.key.urlsafe()),
      form=form,
      lesson_db=lesson,
      html_class='lesson-update',
    )