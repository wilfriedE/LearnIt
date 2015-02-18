# coding: utf-8

from __future__ import absolute_import

import hashlib

from google.appengine.ext import ndb

from api import fields
import model
import util
import config


class Suggestion(model.Base):
  name = ndb.StringProperty()
  message = ndb.TextProperty(required=True)
  item= ndb.KeyProperty()
  vote = ndb.KeyProperty(kind='Vote')