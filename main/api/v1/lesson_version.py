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

#Lesson versions api endpoint for creating a Lesson version (This expects a lesson_key parameter)
@api_v1.resource('/lesson_version/<string:lesson_key>/new', endpoint='api.lesson_version.new')
class LessonVersionCreateAPI(restful.Resource):
  """Handles creation of a new lesson version for a lesson e.i Lesson Update proposal"""
  @auth.login_required
  def post(self, lesson_key):
    if util.param('name') and util.param('is_a'):
      b_is_a = util.param('is_a')
      b_data = helpers.data_scheme_constructor(b_is_a, helpers.rerieve_content_fields(util))
      b_topics = [ ndb.Key(urlsafe=topic_key_url) for topic_key_url in util.param('topics', list)]
      b_name = util.param('name')
      b_description = util.param('description')
      b_contributor = auth.current_user_key()
      b_lesson = ndb.Key(urlsafe=lesson_key).get()
      if not b_lesson:
        return helpers.make_not_found_exception('Lesson %s not found' % b_lesson)
      b_lesson_version = model.LessonVersion(data=b_data,name=b_name,is_a=b_is_a,description=b_description,topics=b_topics,lesson=b_lesson.key,contributor=b_contributor).put()
      b_lesson.contributors += [b_contributor]
      b_lesson.lesson_versions += [b_lesson_version]
      b_lesson.put()
      response = {
        'status': 'success',
        'count': 1,
        'now': helpers.time_now(),
        'result': {'message': 'Lesson Version update proposal was successfuly created!!',
                   'view_url': flask.url_for('lesson_version', version_key=b_lesson_version.urlsafe())
                  },
      }
      return response
    return helpers.make_bad_request_exception("Unsifificient parameters")

#Lesson versions api endpoint for a Lesson Version (retrieving, updating, and deleting)
@api_v1.resource('/lesson_version/<string:version_key>', endpoint='api.lesson_version')
class LessonVersionAPI(restful.Resource):
  """Returns and updates a a specific lesson version """

  def get(self, version_key):
    """Returns a specific lesson version BY version key"""
    lesson_Version = ndb.Key(urlsafe=version_key).get()
    return helpers.make_response(lesson_Version, model.LessonVersion.FIELDS)

  @auth.login_required
  def post(self, version_key):
    """Updates a specific lesson version by key"""
    if util.param('name') and util.param('is_a'):
      b_is_a = util.param('is_a')
      b_data = helpers.data_scheme_constructor(b_is_a, helpers.rerieve_content_fields(util))
      b_topics = [ ndb.Key(urlsafe=topic_key_url) for topic_key_url in util.param('topics', list)]
      b_name = util.param('name')
      b_description = util.param('description')
      b_lesson_version = ndb.Key(urlsafe=version_key).get()
      if not b_lesson_version:
        return helpers.make_not_found_exception('LessonVersion %s not found' % b_lesson_version)
      b_lesson_version.data=b_data
      b_lesson_version.name=b_name
      b_lesson_version.is_a=b_is_a
      b_lesson_version.description=b_description
      b_lesson_version.topics=b_topics
      b_lesson_version = b_lesson_version.put()
      response = {
        'status': 'success',
        'count': 1,
        'now': helpers.time_now(),
        'result': {'message': 'Lesson Version was successfuly updated!',
                   'view_url': flask.url_for('lesson_version', version_key=b_lesson_version.urlsafe())
                  },
      }
      return response
    return helpers.make_bad_request_exception("Unsifificient parameters")

  @auth.login_required
  def delete(self, version_key):
    """Deletes a specific lesson version"""
    lesson_version_key = ndb.Key(urlsafe=version_key)
    if not lesson_version_key:
      return helpers.make_not_found_exception('LessonVersion %s not found' % lesson_version_key)
    lesson_version_key.delete()
    return flask.jsonify({
        'result': {'message': 'LessonVersion successfuly deleted', 'key': lesson_version_key},
        'status': 'success',
      })

    

@api_v1.resource('/lesson_version/<string:version_key>/approve', endpoint='api.lesson_version.approve')
class LessonVersionApprovalAPI(restful.Resource):
  """"""
  def post(self, version_key):
    data = util.param("data")
    lesson_version_db = ndb.Key(urlsafe=version_key).get()
    if not lesson_version_db:
      return helpers.make_not_found_exception('Lesson Version %s not found' % version_key)
    if data == "true":
      lesson_version_db.approved =  True
    elif data == "false":
      lesson_version_db.approved =  False
    version_key = lesson_version_db.put()
    return flask.jsonify({
        'result': {'message': 'Lesson has been updated', 'key': version_key.urlsafe()},
        'status': 'success',
      })