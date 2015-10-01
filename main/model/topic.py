# coding: utf-8

from __future__ import absolute_import

import hashlib
import random

from google.appengine.ext import ndb
from google.appengine.api import search

from api import fields
import model
import util
import config

class Topic(model.Base):
  #  Topics can be FRC, FTC, Safety etc...
  name = ndb.StringProperty(required=True,indexed=True)
  description = ndb.StringProperty(default="")
  approved = ndb.BooleanProperty(default=False)
  color = ndb.StringProperty()

  #Generate Color if non already
  def _pre_put_hook(self):
  	if not self.color:
  		r = lambda: random.randint(0,255)
  		self.color = ('#%02X%02X%02X' % (r(),r(),r()))

  FIELDS = {
      'name': fields.String,
    }

  FIELDS.update(model.Base.FIELDS)