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
class TopicCreateAPI(restful.Resource):
  @auth.admin_required
  def post(self):
  	if util.param('name'):
  		topic = model.Topic.get_or_insert(util.param('name').upper(), name=util.param('name').upper())
  		topic.color=util.param('color')
  		topic.approved=util.param('approved', bool)
  		topic.description=util.param('description')
  		topic.put()
  	return flask.redirect(flask.url_for('topic_list'))

@api_v1.resource('/topic/<string:topic_key>/', endpoint='api.topic')
class TopicAPI(restful.Resource):
  """A specific topic"""
  def get(self, topic_key):
    topic_db = ndb.Key(urlsafe=topic_key).get()
    if not topic_db:
      helpers.make_not_found_exception('Topic %s not found' % topic_key)
    return helpers.make_response(topic_db, model.Topic.FIELDS)

  @auth.login_required
  def put(self, topic_key):
    """Updates a specific topic"""
    topic_db = ndb.Key(urlsafe=topic_key).get()
    if not topic_db:
      helpers.make_not_found_exception('Topic %s not found' % topic_key)
    pass
  
  @auth.login_required
  def delete(self, topic_key):
    """Deletes a specific topic"""
    topic_db = ndb.Key(urlsafe=topic_key).get()
    if not topic_db:
      helpers.make_not_found_exception('Topic %s not found' % topic_key)
    pass