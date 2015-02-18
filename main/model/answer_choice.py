# coding: utf-8

from __future__ import absolute_import

import hashlib

from google.appengine.ext import ndb

from api import fields
import model
import util
import config


class AnswerChoice(model.Base):
  data = ndb.JsonProperty(default='', required=True)
  template = ndb.StringProperty()