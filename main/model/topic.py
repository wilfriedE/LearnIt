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

INDEX_NAME = "topics"

class Topic(model.Base):
  #  Topics can be FRC, FTC, Safety etc...
  name = ndb.StringProperty(required=True,indexed=True)
  approved = ndb.BooleanProperty(default=False)
  color = ndb.StringProperty()

  #Generate Color if non already
  def _pre_put_hook(self):
  	if not self.color:
  		r = lambda: random.randint(0,255)
  		self.color = ('#%02X%02X%02X' % (r(),r(),r()))

  def _post_put_hook(self, future):
    #create document
    #and add to topic index asynchronously
    doc = search.Document(
    doc_id = self.key.id(),
    fields=[
       search.TextField(name='name', value=self.name)
       ])
    search.Index(name=INDEX_NAME).put(doc)

  @classmethod
  def _post_delete_hook(cls, key, future):
    index = search.Index(INDEX_NAME)
    index.delete(key.id())

  @classmethod
  def search(cls, query):
    index = search.Index(INDEX_NAME)
    return index.search(query)

  FIELDS = {
      'name': fields.String,
    }

  FIELDS.update(model.Base.FIELDS)