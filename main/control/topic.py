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

from main import app

###############################################################################
# Topic List
###############################################################################
@app.route('/admin/topic/')
@auth.admin_required
def topic_list():
  topic_dbs = model.Topic.query().fetch()
  return flask.render_template(
      'topic/topic_list.html',
      html_class='user-list',
      title='Topic List',
      topic_dbs=topic_dbs,
      api_url=flask.url_for('api.topic.list'),
    )

###############################################################################
# Topic Update
###############################################################################
class TopicUpdateForm(wtf.Form):
  name = wtforms.StringField(
      model.Topic.name._verbose_name,
      [wtforms.validators.required()], filters=[util.strip_filter],
    )
  description = wtforms.TextAreaField(
      model.Topic.description._verbose_name,
      [wtforms.validators.required()], filters=[util.strip_filter],
    )
  color = wtforms.StringField(
      model.Topic.color._verbose_name,
      [wtforms.validators.required()], filters=[util.strip_filter],
    )
  approved = wtforms.BooleanField(model.Topic.approved._verbose_name)

@app.route('/admin/topic/create/')
@app.route('/admin/topic/<topic_id>/update/')
@auth.admin_required
def topic_update(topic_id=""):
  if topic_id:
    topic_db = model.Topic.get_by_id(topic_id)
  else:
    topic_db = model.Topic()

  form = TopicUpdateForm(obj=topic_db)
  return flask.render_template(
      'topic/topic_update.html',
      title=topic_db.name or 'New Topic',
      html_class='user-update',
      post_path=flask.url_for('api.topic.new'),
      form=form,
      topic_db=topic_db,
    )