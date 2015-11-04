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

#Courses api endpoint for listing all Courses
@api_v1.resource('/courses/', endpoint='api.course.list')
class CoursesListAPI(restful.Resource):
  """
  A Listing of all the courses
  """
  def get(self):
    return helpers.make_response(model.Course.query(model.Course.approved==True).fetch(), model.Course.FIELDS)

#Lessons api endpoint for creating a Lesson
@api_v1.resource('/courses/new', endpoint='api.course.new')
class CourseCreateAPI(restful.Resource):
  @auth.login_required
  def post(self):
    """
    name = ndb.StringProperty(required=True,indexed=True)
    description = ndb.TextProperty()
    lessons = ndb.KeyProperty(kind='Lesson', repeated=True)
    topics = ndb.KeyProperty(kind='Topic', repeated=True)
    contributors = ndb.KeyProperty(kind='User', repeated=True)
    approved = ndb.BooleanProperty(default=False)
    deadlock = ndb.BooleanProperty(default=False)
    color = ndb.StringProperty()
    vote = ndb.KeyProperty(kind='Vote')
    """
    if util.param('name') and util.param('lessons'):
      b_name = util.param('name')
      b_description = util.param('description')
      b_topics = [ ndb.Key(urlsafe=topic_key_url) for topic_key_url in util.param('topics', list)]
      b_lessons = [ ndb.Key(urlsafe=lesson_key_url) for lesson_key_url in util.param('lessons', list)]
      b_contributor = auth.current_user_key()
      b_course = model.Course(name=b_name,description=b_description,topics=b_topics,
                              contributors=[b_contributor], lessons=b_lessons).put()
      response = {
        'status': 'success',
        'count': 1,
        'now': helpers.time_now(),
        'result': {'message': 'Course was successfuly created!!',
                   'view_url': flask.url_for('course', course_key=b_course.urlsafe())
                  },
      }
      return response
    return helpers.make_bad_request_exception("Unsifificient parameters")

#Courses api endpoint for a Course (retrieving, updating and deleting)
@api_v1.resource('/course/<string:course_key>', endpoint='api.course')
class CourseAPI(restful.Resource):
  """
  Retrieves and returns a specific course by course key
  """
  def get(self, course_key):
    """Returns a course"""
    course_db = ndb.Key(urlsafe=course_key).get()
    if not course_db:
      return helpers.make_not_found_exception('Course %s not found' % course_key)
    return helpers.make_response(course_db, model.Course.FIELDS)

  @auth.login_required
  def post(self, course_key):
    """Updates a specific lesson"""
    b_course = ndb.Key(urlsafe=course_key).get()
    if b_course and util.param('name') and util.param('lessons'):
      b_name = util.param('name')
      b_description = util.param('description')
      b_topics = [ ndb.Key(urlsafe=topic_key_url) for topic_key_url in util.param('topics', list)]
      b_lessons = [ ndb.Key(urlsafe=lesson_key_url) for lesson_key_url in util.param('lessons', list)]
      b_contributors = b_course.contributors
      #add new contributors to the list of course contributors.
      if auth.current_user_key() not in b_contributors:
        b_contributors += [auth.current_user_key()]
      b_course.name=b_name
      b_course.description=b_description
      b_course.topics=b_topics
      b_course.contributors=b_contributors
      b_course.lessons=b_lessons
      b_course = b_course.put()
      response = {
        'status': 'success',
        'count': 1,
        'now': helpers.time_now(),
        'result': {'message': 'Course was successfuly created!!',
                   'view_url': flask.url_for('course', course_key=b_course.urlsafe())
                  },
      }
      return response
    return helpers.make_bad_request_exception("Unsifificient parameters")
  
  @auth.login_required
  def delete(self, course_key):
    """Deletes a specific lesson"""
    course_db = ndb.Key(urlsafe=course_key).get()
    if not course_db:
      return helpers.make_not_found_exception('Course %s not found' % course_key)
    course_db.deadLock = True
    course_db.approved =  False
    course_db = course_db.put()
    return flask.jsonify({
        'result': {'message': 'Course has been placed in dealock state', 'key': course_key},
        'status': 'success',
      })
    

@api_v1.resource('/course/<string:course_key>/approve', endpoint='api.course.approve')
class CourseApprovalAPI(restful.Resource):
  """"""
  def post(self, course_key):
    data = util.param("data")
    course_db = ndb.Key(urlsafe=course_key).get()
    if not course_db:
      return helpers.make_not_found_exception('Course %s not found' % course_key)
    if data == "true":
      course_db.approved =  True
    elif data == "false":
      course_db.approved =  False
    course_db = course_db.put()
    return flask.jsonify({
        'result': {'message': 'Course has been updated', 'key': course_db.urlsafe()},
        'status': 'success',
      })

#Search api endpoint for Lessons
@api_v1.resource('/Course/search/<string:name>', endpoint='api.course.search')
class CourseSearchAPI(restful.Resource):
  """Returns courses by search keyword"""
  def get(self, name):
    pass