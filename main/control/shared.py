# coding: utf-8
"""
  This controller is for anything that is generaly shared amongsts other controllers groups
"""
from flask.ext import wtf
import flask
import wtforms

import auth
import util

from main import app


class LessonContentFieldsForm(wtf.Form):
  youtube_video_url = wtforms.StringField('Youtube Video Url', [wtforms.validators.required()])
  vimeo_video_url = wtforms.StringField('Vimeo Video Url', [wtforms.validators.required()])

@app.route('/lesson/commons/fields/<content_type>/')
def lesson_content_fields(content_type):
  data = flask.json.loads(util.param("data"))
  form = LessonContentFieldsForm()
  return flask.render_template(
      'shared/lesson/content_fields.html',
      content_type=content_type,
      data=data,
      form=form,
      html_class='lesson-fields',
    )


@app.route('/lesson/viewport/<content_type>/')
def lesson_viewport(content_type): 
  data = flask.json.loads(util.param("data"))
  return flask.render_template(
      'shared/viewport.html',
      content_type=content_type,
      data=data,
      html_class='lesson-viewport',
    )