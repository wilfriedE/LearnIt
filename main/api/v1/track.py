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

#tracks api endpoint for listing all tracks
@api_v1.resource('/tracks/', endpoint='api.track.list')
class TracksListAPI(restful.Resource):
  """
  A Listing of all the tracks
  """
  def get(self):
    return helpers.make_response(model.Track.query(model.Track.approved==True).fetch(), model.Track.FIELDS)

#Tracks api endpoint for creating a Track
@api_v1.resource('/tracks/new', endpoint='api.track.new')
class TrackCreateAPI(restful.Resource):
  @auth.login_required
  def post(self):
    """
    name = ndb.StringProperty(required=True)
    courses = ndb.TextProperty()
    topics = ndb.KeyProperty(kind='Topic', repeated=True)
    contributors = ndb.KeyProperty(kind='User', repeated=True)
    approved = ndb.BooleanProperty(default=False)
    color = ndb.StringProperty()
    vote = ndb.KeyProperty(kind='Vote')
    """
    if util.param('name') and util.param('courses'):
      b_name = util.param('name')
      b_description = util.param('description')
      b_topics = [ ndb.Key(urlsafe=topic_key_url) for topic_key_url in util.param('topics', list)]
      b_courses = helpers.connected_entities_constructor(util.param('courses', list))
      b_contributor = auth.current_user_key()
      b_track = model.Track(name=b_name,description=b_description,topics=b_topics,
                              contributors=[b_contributor], courses=b_courses).put()
      response = {
        'status': 'success',
        'count': 1,
        'now': helpers.time_now(),
        'result': {'message': 'track was successfuly created!!',
                   'view_url': flask.url_for('track', track_key=b_track.urlsafe())
                  },
      }
      return response
    return helpers.make_bad_request_exception("Unsifificient parameters")

#tracks api endpoint for a track (retrieving, updating and deleting)
@api_v1.resource('/track/<string:track_key>', endpoint='api.track')
class TrackAPI(restful.Resource):
  """
  Retrieves and returns a specific track by track key
  """
  def get(self, track_key):
    """Returns a track"""
    track_db = ndb.Key(urlsafe=track_key).get()
    if not track_db:
      return helpers.make_not_found_exception('track %s not found' % track_key)
    return helpers.make_response(track_db, model.Track.FIELDS)

  @auth.login_required
  def post(self, track_key):
    """Updates a specific Track"""
    b_track = ndb.Key(urlsafe=track_key).get()
    if b_track and util.param('name') and util.param('courses'):
      b_name = util.param('name')
      b_description = util.param('description')
      b_topics = [ ndb.Key(urlsafe=topic_key_url) for topic_key_url in util.param('topics', list)]
      b_courses = helpers.connected_entities_constructor([ ndb.Key(urlsafe=course_key_url) for course_key_url in util.param('courses', list)])
      b_contributors = b_track.contributors
      #add new contributors to the list of track contributors.
      if auth.current_user_key() not in b_contributors:
        b_contributors += [auth.current_user_key()]
      b_track.name=b_name
      b_track.description=b_description
      b_track.topics=b_topics
      b_track.contributors=b_contributors
      b_track.courses=b_courses
      b_track = b_track.put()
      response = {
        'status': 'success',
        'count': 1,
        'now': helpers.time_now(),
        'result': {'message': 'track was successfuly created!!',
                   'view_url': flask.url_for('track', track_key=b_track.urlsafe())
                  },
      }
      return response
    return helpers.make_bad_request_exception("Unsifificient parameters")
  
  @auth.login_required
  def delete(self, track_key):
    """Deletes a specific Track"""
    track_db = ndb.Key(urlsafe=track_key).get()
    if not track_db:
      return helpers.make_not_found_exception('track %s not found' % track_key)
    track_db.deadLock = True
    track_db.approved =  False
    track_db = track_db.put()
    return flask.jsonify({
        'result': {'message': 'track has been placed in dealock state', 'key': track_key},
        'status': 'success',
      })
    

@api_v1.resource('/track/<string:track_key>/approve', endpoint='api.track.approve')
class TrackApprovalAPI(restful.Resource):
  """"""
  def post(self, track_key):
    data = util.param("data")
    track_db = ndb.Key(urlsafe=track_key).get()
    if not track_db:
      return helpers.make_not_found_exception('track %s not found' % track_key)
    if data == "true":
      track_db.approved =  True
    elif data == "false":
      track_db.approved =  False
    track_db = track_db.put()
    return flask.jsonify({
        'result': {'message': 'track has been updated', 'key': track_db.urlsafe()},
        'status': 'success',
      })

#Search api endpoint for Tracks
@api_v1.resource('/track/search/<string:name>', endpoint='api.track.search')
class TrackSearchAPI(restful.Resource):
  """Returns tracks by search keyword"""
  def get(self, name):
    pass