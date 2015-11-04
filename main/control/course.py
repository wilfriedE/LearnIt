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
# Course List
###############################################################################
@app.route('/admin/course/')
@auth.admin_required
def course_list():
  course_dbs = model.Course.query().fetch()
  return flask.render_template(
      'course/course_list.html',
      html_class='course-list',
      title='Course List',
      course_dbs=course_dbs,
      api_url=flask.url_for('api.course.list'),
    )

###############################################################################
# Course View
###############################################################################
@app.route('/course/<course_key>/')
def course(course_key):
  course_db = ndb.Key(urlsafe=course_key).get()    
  return flask.render_template(
      'course/course.html',
      course_db = course_db,
      title= 'Course',
      html_class='course-view',
    )

@app.route('/card/c/<course_id>')
def course_card(course_id):
  course_db = model.Course.get_by_id(int(course_id)) 
  return flask.render_template(
      'course/course_card.html',
      title='Course card',
      course_db=course_db,
      html_class='course-card',
    )

###############################################################################
# New Course
###############################################################################
class NewCourseForm(wtf.Form):
  name = wtforms.StringField(
      'Name',
      [wtforms.validators.required()], filters=[util.strip_filter],
    )
  topics = wtforms.StringField('Topics')
  description = wtforms.TextAreaField(
      'Description', [wtforms.validators.Length(min=2, max=400)],
    )
  lessons = wtforms.StringField('Lessons', [wtforms.validators.required()])
  course_id = wtforms.HiddenField() #This field is only nesessary when creating a new version of an existing Course.

@app.route('/course/create')
@auth.login_required
def new_course():
  """Renders the new Course creation page"""
  form = NewCourseForm()
  return flask.render_template(
      'course/course_update.html',
      title='New Course',
      post_path=flask.url_for('api.course.new'),
      form_method="POST",
      form=form,
      html_class='course',
    )

##This would be the process where users can propose new versions for a Course. These would of course need approval.
@app.route('/course/<course_id>/update/')
@auth.login_required
def course_update(course_id):
  course_db = model.Course.get_by_id(int(course_id))
  form = NewCourseForm(name = course_db.name, description = course_db.description,
   lessons = ', '.join([ key.urlsafe() for key in course_db.lessons]), course_id = course_db.key.id())
  return flask.render_template(
      'course/course_update.html',
      title='Course Update',
      post_path=flask.url_for('api.course', course_key=course_db.key.urlsafe()),
      form_method="POST",
      form=form,
      course_db=course_db,
      html_class='course-update',
    )
