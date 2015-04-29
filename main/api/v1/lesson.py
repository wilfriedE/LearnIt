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
  @auth.login_required
  def get(self):
    return helpers.make_response(model.Lesson.query(model.Lesson.approved==True).fetch(), model.Lesson.FIELDS)

@api_v1.resource('/lessons/version/<string:version_key>', endpoint='api.lesson.version')
class LessonVersionAPI(restful.Resource):
  @auth.login_required
  def get(self):
  	lesson_Version = ndb.Key(urlsafe=version_key).get()
  	return helpers.make_response(lesson_Version, model.LessonVersion.FIELDS)

 