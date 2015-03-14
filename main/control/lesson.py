# coding: utf-8
import logging
from flask.ext import wtf
import flask
import wtforms

import auth
import config
import model
import util
import task
import urlparse
import json
##import cgi

##import gdata.service
##import gdata.youtube
##import gdata.youtube.service
##import gdata.media
##import gdata.geo
##import gdata.alt.appengine

from main import app


###############################################################################
# Lesson View
###############################################################################

@app.route('/course/<course_id>/l/<lesson_id>')
@app.route('/lesson/<lesson_id>/v/<version_id>')
@app.route('/lesson/<lesson_id>')
def lesson(lesson_id, version_id='', course_id=''):
  display_type = 'lesson'
  course = ''
  lesson = model.Lesson.get_by_id(int(lesson_id))
  if course_id and lesson_id:
    display_type = 'course-lesson'
    course = model.Course.get_by_id(int(course_id))
  if version_id:
    display_type = 'lesson-version'
  else:
    version_id = lesson.latest_version.id()
    
  return flask.render_template(
      'lesson/lesson.html',
      lesson = lesson,
      lesson_version_id = version_id,
      course = course,
      title= 'Learning',
      html_class='lesson-view',
      display_type=display_type,
    )


@app.route('/lesson_version/<version_id>')
def render_lesson_version(version_id):
  lesson_version = model.LessonVersion.get_by_id(int(version_id)) 
  return flask.render_template(
      'lesson/lesson_version.html',
      title=lesson_version.name,
      lesson_version=lesson_version,
      lesson_version_data = lesson_version.data_in_json(),
      html_class='lesson-version',
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
  topics = wtforms.StringField(
      'Topics', [wtforms.validators.Length(min=2, max=25)],
    )
  description = wtforms.TextAreaField(
      'Description', [wtforms.validators.Length(min=2, max=25)],
    )
  lesson_id = wtforms.HiddenField()#This field is only nesessary when creating a new version of an existing lesson.
  ##video_thumnail = wtforms.FileField('Video Thumbnail Image')
  ##video_file = wtforms.FileField('Video File')
  video_url = wtforms.StringField('Video Link')


@app.route('/new-lesson/', methods=['GET','POST'])
@auth.login_required
def new_lesson():
  form = NewLessonForm()
  if flask.request.method == 'POST' and form.video_url.data and form.description.data and form.name.data:
    vote = model.Vote().put()
    if form.lesson_id.data:
      lesson = model.Lesson.get_by_id(int(form.lesson_id.data))
      lesson = lesson.key
    else:
      lesson = model.Lesson().put()

    topics = []
    for topic in form.topics.data.split(","):
      t = model.Topic.get_or_insert(topic.strip().capitalize(), name=topic.strip().capitalize())
      if t not in topics:
        topics.append(t.key)
    lesson_version = model.LessonVersion(
                   data = reform_data_scheme(form.video_url.data),
                   name = form.name.data,
                   description = form.description.data,
                   topics = topics,
                   vote = vote,
                   contributor = auth.current_user_key(),
                   lesson = lesson,
                   )
    lesson_version = lesson_version.put()
    lesson = lesson.get()
    lesson.lesson_versions = lesson.lesson_versions + [lesson_version]
    lesson = lesson.put()
    return flask.jsonify(action = sendScript('success', message='Your lesson was created. You may now create a quiz for your lesson',lesson_id = lesson.id(), lesson_version = lesson_version.id()))
  elif flask.request.method == 'POST':
    return flask.jsonify(action = sendScript('error', message='The Lesson was not created because some parts are missing.'))

  return flask.render_template(
      'lesson/new_lesson.html',
      title='New Lesson',
      form=form,
      html_class='lesson',
    )


##This would be the process where users can propose new versions for a Lesson. These would of course need approval.
@app.route('/propose_update/lesson/<lesson_id>')
@auth.login_required
def new_lesson_version(lesson_id):
  user_db = auth.current_user_db()
  lesson = model.Lesson.get_by_id(int(lesson_id))
  form = NewLessonForm(name = lesson.name, description = lesson.description, topics = ', '.join([ key.id() for key in lesson.topics]), lesson_id = lesson_id)
  return flask.render_template(
      'lesson/new_lesson.html',
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


###############################################################################
# Lesson Creation Helpers
###############################################################################
## Data scheme for LessonVersion Data
DATASCHEME = { "fields": ["service_type"],
                "service_type":"",
              }
def reform_data_scheme(video_link):
    url_data = urlparse.urlparse(video_link)
    if url_data.netloc == "www.youtube.com":
      query = urlparse.parse_qs(url_data.query)
      DATASCHEME["video_id"] = query["v"][0]
      DATASCHEME["fields"].append("video_id")
      DATASCHEME["service_type"] = "youtube"
    if url_data.netloc == "www.vimeo.com":
      DATASCHEME["video_id"] = url_data.path.lstrip("/")
      DATASCHEME["fields"].append("video_id")
      DATASCHEME["service_type"] = ("vimeo")
    return json.dumps(DATASCHEME)

def sendScript(event, message='', lesson_id='', lesson_version=''):
  layer = "<script type='text/javascript'>{0}</script>"
  if event == 'success':
    lesson_s_message = " or view your <a href='/lesson/{0}/v/{1}'>New Lesson</a>".format(lesson_id, lesson_version)
    sidedisplay = message + lesson_s_message
    return layer.format("$('#side-result-view').html(\"{0}\");\n$('#new-lesson-form-container').html('Create Quiz');".format(sidedisplay))
  elif event == 'error':
    return layer.format("$('#side-result-view').text({0});".format(message))