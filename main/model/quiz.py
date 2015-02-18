# coding: utf-8

from __future__ import absolute_import

import hashlib

from google.appengine.ext import ndb

from api import fields
import model
import util
import config


class Quiz(model.Base):
  name = ndb.StringProperty()
  questions = ndb.KeyProperty(kind='Question', repeated=True)
  achievement = ndb.KeyProperty(kind='Achievement')
  minimum_answers = ndb.IntegerProperty()
  
  # def answers
  # returns a list of correct answers based on the question's anser valur