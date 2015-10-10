# coding: utf-8
from __future__ import absolute_import

from google.appengine.ext import ndb
from flask.ext import restful

import flask
from api import helpers
import auth
import model
import util

from main import api_v1

@api_v1.resource('/topics/', endpoint='api.topic.list')
class TopicListAPI(restful.Resource):
  """Returns all available topics"""
  def get(self):
    return helpers.make_response(model.Topic.query(model.Topic.approved==True).fetch(), model.Topic.FIELDS)

@api_v1.resource('/topics/new', endpoint='api.topic.new')
class TopicAPI(restful.Resource):
  """Returns all available topics"""
  @auth.admin_required
  def post(self):
  	if util.param('name'):
  		topic = model.Topic.get_or_insert(util.param('name').upper(), name=util.param('name').upper())
  		topic.color=util.param('color')
  		topic.approved=util.param('approved', bool)
  		topic.description=util.param('description')
  		topic.put()
  	return flask.redirect(flask.url_for('topic_list'))
