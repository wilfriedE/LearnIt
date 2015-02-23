# coding: utf-8

from __future__ import absolute_import

import hashlib

from google.appengine.ext import ndb

from api import fields
import model
import util
import config


class LessonVersion(model.Base):
  #  Different versions of a lesson
  name = ndb.StringProperty(required=True)
  description = ndb.TextProperty()
  topics = ndb.KeyProperty(kind='Topic', repeated=True)
  data = ndb.JsonProperty(required=True)
  lesson = ndb.KeyProperty()
  popularity = ndb.IntegerProperty()
  contributor = ndb.KeyProperty(kind='User')
  quiz = ndb.KeyProperty(kind='Quiz')
  vote = ndb.KeyProperty(kind='Vote')

  # Logic for when the LessonVersion should be set as latest version of Lesson
  # def assign_as_latest_lesson():
    #	pass
  #No longer considering since the latest version would be returned after
    #some algorithm.
