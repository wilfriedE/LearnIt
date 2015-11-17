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
  lessons = ndb.TextProperty()
  topics = ndb.KeyProperty(kind='Topic', repeated=True)
  contributors = ndb.KeyProperty(kind='User', repeated=True)
  approved = ndb.BooleanProperty(default=False)
  deadlock = ndb.BooleanProperty(default=False)
  color = ndb.StringProperty()
  vote = ndb.KeyProperty(kind='Vote')

  def card(self):
    return flask.url_for('course_card',course_id=self.key.id())

  def get_lessons(self):
    """
      returns a list of the lesson keys
    """
    lessons_lst = []
    for k,lesson in self.data_to_json(self.lessons).items():
      lessons_lst += [ndb.Key(urlsafe=lesson['e_value'])]
    return lessons_lst

  def get_lessons_dict(self):
    """
      returns an ordered json formated version of the lessons
    """
    return self.data_to_json(self.lessons)

  def get_lesson(self, position):
    """
      returns a lesson based on position
    """
    lessons_dict = self.data_to_json(self.lessons)
    return lessons_dict[position]

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
    'lessons': fields.String,
    'approved': fields.Boolean,
    'topics': fields.Keys,
    'contributors': fields.Keys,
    'vote': fields.Key,
  }

  FIELDS.update(model.Base.FIELDS)