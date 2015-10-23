# coding: utf-8

from __future__ import absolute_import

from flask.ext import restful

from api import helpers
import auth
import config
import model

from main import api_v1


@api_v1.resource('/supported/lessons', endpoint='api.config.supported.lessons')
class ConfigSupportedLessonsAPI(restful.Resource):
  def get(self):
  	contentTypes = {
  					"count": 2, 
  					"result": [
  							{"name": 'youtube-video', "description": 'Videos from Youtube'},
  							{"name": 'vimeo-video', "description": 'Videos from Vimeo'},
  							],
  					"status": "success"
  					}
  	return contentTypes

@api_v1.resource('/supported/quizes', endpoint='api.config.supported.quizes')
class ConfigSupportedQuizesAPI(restful.Resource):
  def get(self):
    contentTypes = {}
    return contentTypes