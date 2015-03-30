# coding: utf-8

import flask

import config
import model
from main import app


###############################################################################
# Welcome
###############################################################################
@app.route('/')
def welcome():
  return flask.render_template('welcome.html', html_class='welcome')


###############################################################################
# Library
###############################################################################
@app.route('/library')
def library():
  lessons = model.Lesson.query(model.Lesson.approved==True).fetch()
  courses = model.Course.query(model.Course.approved==True).fetch()
  return flask.render_template('library.html', lessons=lessons, courses=courses, html_class='library')

###############################################################################
# Topic
###############################################################################
@app.route('/topic:<topic_name>')
def topic_view(topic_name):
  topic = model.Topic.get_by_id(topic_name.strip().capitalize()).key
  lessons = model.Lesson.query(model.Lesson.topics == topic, model.Lesson.approved==True).fetch()
  courses = model.Course.query(model.Course.topics == topic, model.Course.approved==True).fetch()
  return flask.render_template('topic.html', lessons=lessons, courses=courses, html_class='topic')

###############################################################################
# Sitemap stuff
###############################################################################
@app.route('/sitemap.xml')
def sitemap():
  response = flask.make_response(flask.render_template(
      'sitemap.xml',
      lastmod=config.CURRENT_VERSION_DATE.strftime('%Y-%m-%d'),
    ))
  response.headers['Content-Type'] = 'application/xml'
  return response


###############################################################################
# Warmup request
###############################################################################
@app.route('/_ah/warmup')
def warmup():
  # TODO: put your warmup code here
  return 'success'
