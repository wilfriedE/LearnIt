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

@api_v1.resource('/lessons/', endpoint='api.lesson.list')
class LessonListAPI(restful.Resource):
  """
  A Listing of all the lessons
  """
  def get(self):
    return helpers.make_response(model.Lesson.query(model.Lesson.approved==True).fetch(), model.Lesson.FIELDS)

#Lesson api endpoint for creating a Lesson
@api_v1.resource('/lessons/lesson/new', endpoint='api.lesson.new')
class LessonCreateAPI(restful.Resource):
  """
  Handles post request for new lesson content
  """
  @auth.login_required
  def post(self):
  	#Create Lesson version
  	pass

#Lesson version api endpoint for Lessons
@api_v1.resource('/lessons/lesson/<string:lesson_key>', endpoint='api.lesson')
class LessonAPI(restful.Resource):
  """
  Retrieves and returns a specific lesson by lesson key
  """
  def get(self):
    """Returns lesson"""
  	lesson = ndb.Key(urlsafe=lesson_key).get()
  	return helpers.make_response(lesson, model.Lesson.FIELDS)

  @auth.login_required
  def put(self):
    """Updates a specific lesson"""
  	#Update Lesson version Might need to change this to post instead of put.
  	pass
  
  @auth.login_required
  def delete(self):
    """Deletes a specific lesson"""
  	#Delete Lesson version
  	pass

#Search api endpoint for Lessons
@api_v1.resource('/lessons/search/<string:name>', endpoint='api.lesson.search')
class LessonSearchAPI(restful.Resource):
  """Returns lessons by search keyword"""
  def get(self):
  	pass