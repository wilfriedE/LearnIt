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

@api_v1.resource('/api/v1/topics/', endpoint='api.topics')
class TopicsAPI(restful.Resource):
  def get(self):
    return helpers.make_response(model.Topic.query().fetch(), model.Topic.FIELDS)