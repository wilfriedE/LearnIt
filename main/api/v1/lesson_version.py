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

#Lesson version api endpoint for creating a Lesson version
@api_v1.resource('/lessons/version/new', endpoint='api.lesson.version.new')
class LessonVersionCreateAPI(restful.Resource):
  """Handles creation of a new lesson version for a lesson"""
  @auth.login_required
  def post(self):
  	#Create Lesson version
  	pass

#Lesson version api endpoint for a Lesson Version
@api_v1.resource('/lessons/version/<string:version_key>', endpoint='api.lesson.version')
class LessonVersionAPI(restful.Resource):
  """Returns and updates a a specific lesson version """

  def get(self):
    """Returns a specific lesson version BY version key"""
    lesson_Version = ndb.Key(urlsafe=version_key).get()
    return helpers.make_response(lesson_Version, model.LessonVersion.FIELDS)

  @auth.login_required
  def put(self):
    """Updates a specific lesson version by key"""
    pass

  @auth.login_required
  def delete(self):
    """Deletes a specific lesson version"""
    #Delete Lesson version
    pass