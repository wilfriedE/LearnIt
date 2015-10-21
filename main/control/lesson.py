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

@app.route('/lesson/viewport/<content_type>/')
def render_lesson_viewport(content_type): 
  data = flask.json.loads(util.param("data"))
  return flask.render_template(
      'shared/viewport.html',
      content_type=content_type,
      data=data,
      html_class='lesson-viewport',
    )

@app.route('/card/l/<lesson_id>')
def lesson_card(lesson_id):
  lesson = model.Lesson.get_by_id(int(lesson_id)) 
  return flask.render_template(
      'lesson/lesson_card.html',
      title='',
      lesson=lesson,
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
  ##Below this point are optional field types depending on requirements.
  youtube_video_url = wtforms.StringField('Youtube Video Url', [wtforms.validators.required()])
  vimeo_video_url = wtforms.StringField('Vimeo Video Url', [wtforms.validators.required()])

#this code below is still disgusting -- seriously needs refactoring
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
  form = NewLessonForm(name = lesson.name, description = lesson.description, topics = ', '.join([ key.id() for key in lesson.topics]), lesson_id = lesson_id)
  return flask.render_template(
      'lesson/lesson_update.html',
      title='Lesson Update Proposal',
      form=form,
      html_class='lesson-update',
    )



##No Longer Doing Video Uploads for the time being because of this article
## http://apiblog.youtube.com/2012/02/video-uploads-from-your-sites-community.html
## Considering implementing AuthSub to allow users to upload their own account instead.
##@app.route('/video_meta_check/', methods=['POST'])
##@auth.login_required
##def process_video_meta():
##  client = gdata.youtube.service.YouTubeService()
##  gdata.alt.appengine.run_on_appengine(client)
##
##  video_title = cgi.escape(flask.request.args.get('video_title'))
##  video_description = cgi.escape(flask.request.args.get('video_description'))
##  video_category = cgi.escape(flask.request.args.get('video_category'))
##  video_tags = cgi.escape(flask.request.args.get('video_tags'))
##  my_media_group = gdata.media.Group(
##        title = gdata.media.Title(text=video_title),
##        description = gdata.media.Description(description_type='plain',
##                                            text=video_description),
##        keywords = gdata.media.Keywords(text=video_tags),
##        category = gdata.media.Category(
##          text=video_category,
##          scheme='http://gdata.youtube.com/schemas/2007/categories.cat',
##          label=video_category),
##      player=None
##      )
##  video_entry = gdata.youtube.YouTubeVideoEntry(media=my_media_group)
##  
##  try:
##      server_response = client.GetFormUploadToken(video_entry)
##  except gdata.service.RequestError, request_error:
##    return
##
##  post_url = server_response[[]0]
##  youtube_token = server_response[[]1]
##
##  return flask.render_template(
##      'lesson/lesson.html',
##      title=lesson['name'],
##      html_class='lesson-version-view',
##      lesson=lesson,
##    )