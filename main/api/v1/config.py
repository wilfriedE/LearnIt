# coding: utf-8

from __future__ import absolute_import

from flask.ext import restful

from api import helpers
import auth
import config
import model

from main import api_v1


@api_v1.resource('/config/', endpoint='api.config')
class ConfigAPI(restful.Resource):
  @auth.admin_required
  def get(self):
    return helpers.make_response(config.CONFIG_DB, model.Config.FIELDS)

@api_v1.resource('/supported/', endpoint='api.config.supportedContents')
class ConfigSupportedContentsAPI(restful.Resource):
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