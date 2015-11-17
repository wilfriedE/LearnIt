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
  tracks = model.Track.query(model.Track.approved==True).fetch()
  return flask.render_template('library.html', lessons=lessons, courses=courses, tracks=tracks, html_class='library')

###############################################################################
# Library
###############################################################################
@app.route('/contribute')
def contribute():
  return flask.render_template('contribute.html', html_class='contribute')

###############################################################################
# Topic
###############################################################################
@app.route('/topic:<string:topic_name>')
def topic_view(topic_name):
  topic_db = model.Topic.get_by_id(topic_name.strip().upper())
  if topic_db:
    topic_key = topic_db.key
    lessons = model.Lesson.query(model.Lesson.topics == topic_key, model.Lesson.approved==True).fetch()
    courses = model.Course.query(model.Course.topics == topic_key, model.Course.approved==True).fetch()
    tracks = model.Track.query(model.Track.topics == topic_key, model.Track.approved==True).fetch()
    return flask.render_template('topic.html', topic=topic_db, lessons=lessons, courses=courses, tracks=tracks, html_class='topic')
  return flask.abort(404)

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
