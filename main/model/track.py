# coding: utf-8

from __future__ import absolute_import

import hashlib
import random 

from google.appengine.ext import ndb

from api import fields
import model
import util
import config


class Track(model.Base):
  name = ndb.StringProperty(required=True)
  courses = ndb.KeyProperty(kind='Course', repeated=True)
  topics = ndb.KeyProperty(kind='Topic', repeated=True)
  contributors = ndb.KeyProperty(kind='User', repeated=True)
  approved = ndb.BooleanProperty(default=False)
  color = ndb.StringProperty()
  vote = ndb.KeyProperty(kind='Vote')

  #Generate Color if non already
  def _pre_put_hook(self):
  	if not self.color:
  		r = lambda: random.randint(0,255)
  		self.color = ('#%02X%02X%02X' % (r(),r(),r()))

  def _post_put_hook(self, future):
    #After an update update the lesson's properties if this version is the parent lesson's latest version
    # use update_lesson(self)
    #order matters bellow 
    # create vote for lesson version if there isn't any already. and also check if it already has a lesson other wise create one.
    if not self.vote:
      self.vote = model.Vote(item=self.key).put()

    self._put_async()
  
  @classmethod
  def _post_delete_hook(cls, key, future):
    #delete the lesson version's votes and quiz if it has one.
    model.Vote.query(model.Vote.item == key).get().delete()