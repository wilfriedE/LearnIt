# coding: utf-8

from __future__ import absolute_import

import hashlib

from google.appengine.ext import ndb

from api import fields
import model
import util
import config


class Program(model.Base):
  #  Programs are stuff like FRC, FTC etc...
  name = ndb.StringProperty(required=True)
  website = ndb.StringProperty(default='')

