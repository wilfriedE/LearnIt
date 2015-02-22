# coding: utf-8

from __future__ import absolute_import

import hashlib

from google.appengine.ext import ndb

from api import fields
import model
import util
import config


class Course(model.Base):
  name = ndb.StringProperty(required=True)
  lessons = ndb.KeyProperty(kind='Lesson', repeated=True)
  topics = ndb.KeyProperty(kind='Topic', repeated=True)
  contributors = ndb.KeyProperty(kind='User', repeated=True)