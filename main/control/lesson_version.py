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

from main import app

###############################################################################
# Lesson List
###############################################################################
@app.route('/admin/lesson_version/')
@auth.admin_required
def lesson_version_list():
  lesson_version_dbs = model.LessonVersion.query().fetch()
  return flask.render_template(
      'lesson_version/lesson_version_list.html',
      html_class='user-list',
      title='Lesson Version List',
      lesson_version_dbs=lesson_version_dbs,
      api_url='',
    )

###############################################################################
# LessonVersion View
###############################################################################
@app.route('/lesson_version/<version_key>/')
def lesson_version(version_key):
  lesson_version = ndb.Key(urlsafe=version_key).get()
    
  return flask.render_template(
      'lesson_version/lesson_version.html',
      lesson_version = lesson_version,
      title= 'Learning',
      html_class='lesson-view',
      display_type='lesson-version',
    )

@app.route('/card/l/v/<lesson_version_id>')
def lesson_version_card(lesson_version_id):
  lesson_version_db = model.LessonVersion.get_by_id(int(lesson_version_id)) 
  return flask.render_template(
      'lesson_version/lesson_version_card.html',
      title=lesson_version_db.name,
      lesson_version_db=lesson_version_db,
      html_class='lesson-version-card',
    )

###############################################################################
# New LessonVersion
###############################################################################
class NewLessonVersionForm(wtf.Form):
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

@app.route('/lesson_version/<lesson_version_id>/update')
@auth.login_required
def lesson_version_update(lesson_version_id):
  user_db = auth.current_user_db()
  lesson = model.LessonVersion.get_by_id(int(lesson_version_id))
  #make edit so only lesson version creator can make changes to lesson version.
  form =  NewLessonVersionForm(name = lesson.name, description = lesson.description,
   topics = ', '.join([ key.urlsafe() for key in lesson.topics]), lesson_id = lesson_version_id,
   is_a = lesson.is_a)
  return flask.render_template(
      'lesson_version/lesson_version_update.html',
      title='Lesson Update Proposal',
      post_path=flask.url_for('api.lesson_version',version_key=lesson.key.urlsafe()),
      form=form,
      lesson_version_db=lesson,
      html_class='lesson-version-update',
    )

