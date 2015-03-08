# coding: utf-8

from __future__ import absolute_import

import hashlib
import random

from google.appengine.ext import ndb

from api import fields
import model
import util
import config

class Lesson(model.Base):
  lesson_versions = ndb.KeyProperty(kind='LessonVersion', repeated=True)
  contributors = ndb.KeyProperty(repeated=True)
  color = ndb.StringProperty()

  # Return the Latest version. After some logical procession.
  @classmethod
  def latest_version(self):
  	pass

  #Generate Color if non already
  def _pre_put_hook(self):
  	if not self.color:
  		r = lambda: random.randint(0,255)
  		self.color = ('#%02X%02X%02X' % (r(),r(),r()))