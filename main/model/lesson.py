# coding: utf-8

from __future__ import absolute_import

import hashlib
import random
import json
import flask

from google.appengine.ext import ndb

from api import fields
import model
import util
import config

class Lesson(model.Base):
  lesson_versions = ndb.KeyProperty(kind='LessonVersion', repeated=True)
  latest_version = ndb.KeyProperty(kind='LessonVersion')
  contributors = ndb.KeyProperty(repeated=True)
  color = ndb.StringProperty()
  deadLock = ndb.BooleanProperty(default=False) #only if new versions should not be accepted
  is_a =  ndb.StringProperty() #the type of the lesson being submitted.

  #These properties are set based on the latest version
  #Fields are not required because 
  name = ndb.StringProperty()
  description = ndb.TextProperty()
  data = ndb.StringProperty()
  topics = ndb.KeyProperty(kind='Topic', repeated=True)
  popularity = ndb.IntegerProperty()
  approved = ndb.BooleanProperty(default=False)
  quiz = ndb.KeyProperty(kind='Quiz')
  vote = ndb.KeyProperty(kind='Vote')
  #Contents in the above block are derived from the latest version.

  #Generate Color if non already
  def _pre_put_hook(self):
  	if not self.color:
  		r = lambda: random.randint(0,255)
  		self.color = ('#%02X%02X%02X' % (r(),r(),r()))

  #card url
  def card(self):
  	return ('/card/l/%s' % self.id_or_name())

  #returns html of card
  def load_card(self):
  	return flask.render_template(
      'lesson/lesson_card.html',
      lesson=self,
      html_class='lesson-card',
    )

  def data_in_json(self):
    data = json.loads(self.data)
    return data

  FIELDS = {
    'data': fields.String,
    'is_a': fields.String,
    'lesson_versions': fields.Key,
    'description': fields.String,
    'quiz': fields.Key,
    'topics': fields.Key
  }

  FIELDS.update(model.Base.FIELDS)