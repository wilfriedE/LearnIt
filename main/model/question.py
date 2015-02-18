# coding: utf-8

from __future__ import absolute_import

import hashlib

from google.appengine.ext import ndb

from api import fields
import model
import util
import config


class Question(model.Base):
  description = ndb.StringProperty()
  quiz = ndb.KeyProperty(kind='Quiz')
  achievement = ndb.KeyProperty(kind='Achievement')
  question_type = ndb.StringProperty(default='text', choices=[
      'text', 'multiple-choice', 'multiple-image-choice',
    ])
  question_fields = ndb.KeyProperty(kind='AnswerChoice', repeated=True)
  answer = ndb.KeyProperty(kind='AnswerChoice')
  minimum_answers = ndb.IntegerProperty()