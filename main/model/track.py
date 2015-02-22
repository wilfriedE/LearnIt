# coding: utf-8

from __future__ import absolute_import

import hashlib

from google.appengine.ext import ndb

from api import fields
import model
import util
import config


class Track(model.Base):
  name = ndb.StringProperty(required=True)
  courses = ndb.KeyProperty(kind='Course', repeated=True)
  topics = ndb.KeyProperty(kind='Topic', repeated=True)
  contributors = ndb.KeyProperty(kind='User', repeated=True)