# coding: utf-8

from flask.ext import restful

from api import helpers
import auth
import model

from main import api


@api.resource('/api/v1/topics/', endpoint='api.topics')
class TopicsAPI(restful.Resource):
  def get(self):
    return helpers.make_response(model.Topic.query().fetch(), model.Topic.FIELDS)