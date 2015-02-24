# coding: utf-8

from __future__ import absolute_import

import hashlib

from google.appengine.ext import ndb

from api import fields
import model
import util
import config


class Topic(model.Base):
  #  Topics can be FRC, FTC, Safety etc...
  name = ndb.StringProperty(required=True)
  #  Define a method for before creation that does not create if it's a duplicate.
