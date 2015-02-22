# coding: utf-8

from __future__ import absolute_import

import hashlib

from google.appengine.ext import ndb

from api import fields
import model
import util
import config


class Quiz(model.Base):
  name = ndb.StringProperty(required=True)
  questions = ndb.KeyProperty(kind='Question', repeated=True)
  points = ndb.IntegerProperty(default=10)
  achievement = ndb.KeyProperty(kind='Achievement')
  minimum_answers = ndb.IntegerProperty(default=1)