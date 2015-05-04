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

  def _post_put_hook(self, future):
    if not self.vote:
      self.vote = model.Vote(item=self.key).put()
      
    self._put_async() #avoit using put() here because it will cause infinite loop

  @classmethod
  def _post_delete_hook(cls, key, future):
    #delete the lesson version's votes and quiz if it has one.
    model.Vote.query(model.Vote.item == key).get().delete()