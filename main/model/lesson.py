# coding: utf-8

from __future__ import absolute_import

import hashlib

from google.appengine.ext import ndb

from api import fields
import model
import util
import config

class Lesson(model.Base):
  lesson_versions = ndb.KeyProperty(kind='LessonVersion', repeated=True)
  contributors = ndb.KeyProperty(repeated=True)

  # Return the Latest version. After some logical procession.
  @classmethod
  def latest_version(self):
  	pass