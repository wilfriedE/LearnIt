# coding: utf-8

from __future__ import absolute_import

import hashlib

from google.appengine.ext import ndb

from api import fields
import model
import util
import config


class Achievement(model.Base):
  name = ndb.StringProperty(required=True)
  data = ndb.JsonProperty(required=True)
  quiz= ndb.KeyProperty(required=True)