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


class Course(model.Base):
  name = ndb.StringProperty(required=True,indexed=True)
  description = ndb.TextProperty()
  lessons = ndb.KeyProperty(kind='Lesson', repeated=True)
  topics = ndb.KeyProperty(kind='Topic', repeated=True)
  contributors = ndb.KeyProperty(kind='User', repeated=True)
  approved = ndb.BooleanProperty(default=False)
  deadlock = ndb.BooleanProperty(default=False)
  color = ndb.StringProperty()
  vote = ndb.KeyProperty(kind='Vote')

  def card(self):
    return flask.url_for('course_card',course_id=self.key.id())

  #Generate Color if non already
  def _pre_put_hook(self):
  	if not self.color:
  		r = lambda: random.randint(0,255)
  		self.color = ('#%02X%02X%02X' % (r(),r(),r()))

  def _post_put_hook(self, future):
    if not self.vote:
      self.vote = model.Vote(item=self.key).put()
      self._put_async() #AVOID USING put() because it will cause infinite loop

  @classmethod
  def _post_delete_hook(cls, key, future):
    #delete the lesson version's votes and quiz if it has one.
    model.Vote.query(model.Vote.item == key).get().delete()
    try:
      model.Quiz.query(model.Quiz.item == key).get().delete()
    except Exception, e:
      pass

  FIELDS = {
    'name': fields.String,
    'description': fields.String,
    'lessons': fields.Key,
    'approved': fields.Boolean,
    'topics': fields.Key,
    'contributors': fields.Key,
    'vote': fields.Key,
  }

  FIELDS.update(model.Base.FIELDS)