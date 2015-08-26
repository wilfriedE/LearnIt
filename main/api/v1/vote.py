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

#Vote api endpoint does not need to be created. Creation should occur on other element creations.
@api_v1.resource('/vote/<string:vote_key>', endpoint='api.vote')
class LessonAPI(restful.Resource):
  @auth.login_required
  def put(self):
  	#Update a vote.
  	pass
  
  @auth.login_required
  def delete(self):
  	#Delete a vote
  	pass