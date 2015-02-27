# coding: utf-8

from __future__ import absolute_import

import hashlib

from google.appengine.ext import ndb

from api import fields
import model
import util
import config
import json

class LessonVersion(model.Base):
  #  Different versions of a lesson
  name = ndb.StringProperty(required=True)
  description = ndb.TextProperty()
  data = ndb.StringProperty(required=True)
  topics = ndb.KeyProperty(kind='Topic', repeated=True)
  lesson = ndb.KeyProperty(kind='Lesson')
  popularity = ndb.IntegerProperty()
  contributor = ndb.KeyProperty(kind='User')
  quiz = ndb.KeyProperty(kind='Quiz')
  vote = ndb.KeyProperty(kind='Vote')

  def data_in_json(self):
    data = json.loads(self.data)
    return data