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
  question_type = ndb.StringProperty(default='word-answer', choices=[
      'word-answer' , 'fill-the-blank', 'multiple-choice', 'multiple-image-choice',
    ])
  # Figure out other posibilities.
  question_fields = ndb.KeyProperty(kind='AnswerChoice', repeated=True)
  answer = ndb.KeyProperty(kind='AnswerChoice')
  minimum_answers = ndb.IntegerProperty()