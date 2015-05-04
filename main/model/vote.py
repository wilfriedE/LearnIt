# coding: utf-8

from __future__ import absolute_import

import hashlib

from google.appengine.ext import ndb

from api import fields
import model
import util
import config


class Vote(model.Base):
  downvote = ndb.IntegerProperty(default=0)
  upvote = ndb.IntegerProperty(default=0)
  total = ndb.ComputedProperty(lambda self: (self.upvote - self.downvote))
  item = ndb.KeyProperty() #to recognize owner Entity
  voters = ndb.KeyProperty(kind='User', repeated=True)