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

#Lessons api endpoint for listing all Lessons
@api_v1.resource('/lessons/', endpoint='api.lesson.list')
class LessonListAPI(restful.Resource):
  """
  A Listing of all the lessons
  """
  def get(self):
    return helpers.make_response(model.Lesson.query(model.Lesson.approved==True).fetch(), model.Lesson.FIELDS)

#Lessons api endpoint for creating a Lesson
@api_v1.resource('/lessons/new', endpoint='api.lesson.new')
class LessonCreateAPI(restful.Resource):
  """
  Handles post request for new lesson content
  name = ndb.StringProperty(required=True)
  description = ndb.TextProperty()
  data = ndb.StringProperty(required=True)
  topics = ndb.KeyProperty(kind='Topic', repeated=True)
  lesson = ndb.KeyProperty(kind='Lesson')
  popularity = ndb.IntegerProperty()
  contributor = ndb.KeyProperty(kind='User')
  approved = ndb.BooleanProperty(default=False)
  quiz = ndb.KeyProperty(kind='Quiz')
  vote = ndb.KeyProperty(kind='Vote')
  color = ndb.StringProperty()
  is_a = ndb.StringProperty()
  """
  @auth.login_required
  def post(self):
    if util.param('name') and util.param('is_a'):
      b_is_a = util.param('is_a')
      b_data = helpers.data_scheme_constructor(b_is_a, helpers.rerieve_content_fields(util))
      b_topics = [ ndb.Key(urlsafe=topic_key_url) for topic_key_url in util.param('topics', list)]
      b_name = util.param('name')
      b_description = util.param('description')
      b_contributor = auth.current_user_key()
      b_lesson = model.Lesson(data=b_data,name=b_name,is_a=b_is_a,description=b_description,topics=b_topics,contributors=[b_contributor]).put().get()
      b_lesson_version = model.LessonVersion(data=b_data,name=b_name,is_a=b_is_a,description=b_description,topics=b_topics,lesson=b_lesson.key,contributor=b_contributor).put()
      b_lesson.latest_version = b_lesson_version
      b_lesson.lesson_versions = [b_lesson_version]
      b_lesson.put()
      response = {
        'status': 'success',
        'count': 1,
        'now': helpers.time_now(),
        'result': {'message': 'Lesson was successfuly created!!',
                   'view_url': flask.url_for('lesson', lesson_key=b_lesson.key.urlsafe())
                  },
      }
      return response
    return helpers.make_bad_request_exception("Unsifificient parameters")

#Lessons api endpoint for a Lesson (retrieving, updating and deleting)
@api_v1.resource('/lesson/<string:lesson_key>', endpoint='api.lesson')
class LessonAPI(restful.Resource):
  """
  Retrieves and returns a specific lesson by lesson key
  """
  def get(self, lesson_key):
    """Returns lesson"""
    lesson_db = ndb.Key(urlsafe=lesson_key).get()
    if not lesson_db:
      return helpers.make_not_found_exception('Lesson %s not found' % lesson_key)
    return helpers.make_response(lesson_db, model.Lesson.FIELDS)

  @auth.login_required
  def post(self, lesson_key):
    """Updates a specific lesson"""
    if util.param('name') and util.param('is_a'):
      b_is_a = util.param('is_a')
      b_data = helpers.data_scheme_constructor(b_is_a, helpers.rerieve_content_fields(util))
      b_topics = [ ndb.Key(urlsafe=topic_key_url) for topic_key_url in util.param('topics', list)]
      b_name = util.param('name')
      b_description = util.param('description')
      b_lesson = ndb.Key(urlsafe=lesson_key).get()
      if not b_lesson:
        return helpers.make_not_found_exception('Lesson %s not found' % lesson_key)
      b_lesson.data=b_data
      b_lesson.name=b_name
      b_lesson.is_a=b_is_a
      b_lesson.description=b_description
      b_lesson.topics=b_topics
      b_lesson = b_lesson.put()
      response = {
        'status': 'success',
        'count': 1,
        'now': helpers.time_now(),
        'result': {'message': 'Lesson was successfuly updated!!',
                   'view_url': flask.url_for('lesson', lesson_key=b_lesson.urlsafe())
                  },
      }
      return response
    return helpers.make_bad_request_exception("Unsifificient parameters")
  
  @auth.login_required
  def delete(self, lesson_key):
    """Deletes a specific lesson"""
    lesson_key = ndb.Key(urlsafe=lesson_key)
    if not lesson_key:
      return helpers.make_not_found_exception('Lesson %s not found' % lesson_key)
    lesson_key.delete()
    return flask.jsonify({
        'result': {'message': 'Lesson successfuly deleted', 'key': lesson_key},
        'status': 'success',
      })
    

#Search api endpoint for Lessons
@api_v1.resource('/lessons/search/<string:name>', endpoint='api.lesson.search')
class LessonSearchAPI(restful.Resource):
  """Returns lessons by search keyword"""
  def get(self, name):
  	pass