# coding: utf-8

from __future__ import absolute_import

import hashlib

from google.appengine.ext import ndb

from api import fields
import model
import util
import config

class Team(model.Base):
  name = ndb.StringProperty(required=True)
  number = ndb.IntegerProperty(required=True)
  email = ndb.StringProperty(required=True)
  website = ndb.StringProperty(default='')
  program = ndb.KeyProperty(required=True)
  pins = ndb.KeyProperty(repeated=True)
  admins = ndb.KeyProperty(repeated=True)

