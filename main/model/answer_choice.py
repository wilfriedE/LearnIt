# coding: utf-8

from __future__ import absolute_import

import hashlib

from google.appengine.ext import ndb

from api import fields
import model
import util
import config
import json

class AnswerChoice(model.Base):
  data = ndb.StringProperty(default='', required=True)
  template = ndb.StringProperty()

  @classmethod
  def data_in_json(self):
    data = json.loads(self.data)
    return data