# coding: utf-8

from __future__ import absolute_import

import hashlib
import random 
import flask 

from google.appengine.ext import ndb

from api import fields
import model
import util
import config


class Track(model.Base):
  name = ndb.StringProperty(required=True)
  description = ndb.TextProperty()
  courses = ndb.TextProperty()
  topics = ndb.KeyProperty(kind='Topic', repeated=True)
  contributors = ndb.KeyProperty(kind='User', repeated=True)
  approved = ndb.BooleanProperty(default=False)
  color = ndb.StringProperty()
  vote = ndb.KeyProperty(kind='Vote')

  def card(self):
    return flask.url_for('track_card', track_id=self.key.id())
  
  def get_courses(self):
    """
      returns a list of the courses
    """
    courses_lst = []
    for k,course in self.data_to_json(self.courses).items():
      courses_lst += [ndb.Key(urlsafe=course['e_value'])]
    return courses_lst

  def get_courses_dict(self):
    """
      returns an ordered json formated version of the courses
    """
    return self.data_to_json(self.courses)

  def get_course(self, position):
    """
      returns a course based on position
    """
    courses_dict = self.data_to_json(self.courses)
    return courses_dict[position]

  #Generate Color if non already
  def _pre_put_hook(self):
  	if not self.color:
  		r = lambda: random.randint(0,255)
  		self.color = ('#%02X%02X%02X' % (r(),r(),r()))

  def _post_put_hook(self, future):
    #After an update update the lesson's properties if this version is the parent lesson's latest version
    # use update_lesson(self)
    #order matters bellow 
    # create vote for lesson version if there isn't any already. and also check if it already has a lesson other wise create one.
    if not self.vote:
      self.vote = model.Vote(item=self.key).put()

    self._put_async()
  
  @classmethod
  def _post_delete_hook(cls, key, future):
    #delete the lesson version's votes and quiz if it has one.
    model.Vote.query(model.Vote.item == key).get().delete()