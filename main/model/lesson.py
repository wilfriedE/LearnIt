# coding: utf-8

from __future__ import absolute_import

import hashlib
import random
import json
import flask

from google.appengine.ext import ndb
from google.appengine.api import search

from api import fields
import model
import util
import config

INDEX_NAME = "lessons"

class Lesson(model.Base):
  lesson_versions = ndb.KeyProperty(kind='LessonVersion', repeated=True)
  latest_version = ndb.KeyProperty(kind='LessonVersion')
  contributors = ndb.KeyProperty(repeated=True)
  color = ndb.StringProperty()
  deadLock = ndb.BooleanProperty(default=False) #only if new versions should not be accepted
  is_a =  ndb.StringProperty() #the type of the lesson being submitted.

  #These properties are set based on the latest version
  #Fields are not required because 
  name = ndb.StringProperty(indexed=True)
  description = ndb.TextProperty()
  data = ndb.StringProperty()
  topics = ndb.KeyProperty(kind='Topic', repeated=True)
  popularity = ndb.IntegerProperty()
  approved = ndb.BooleanProperty(default=False)
  quiz = ndb.KeyProperty(kind='Quiz')
  vote = ndb.KeyProperty(kind='Vote')
  #Contents in the above block are derived from the latest version.

  #Generate Color if non already
  def _pre_put_hook(self):
  	if not self.color:
  		r = lambda: random.randint(0,255)
  		self.color = ('#%02X%02X%02X' % (r(),r(),r()))
  
  def _post_put_hook(self, future):
    #create document
    #and add to topic index asynchronously
    """
    doc = search.Document(
    doc_id = self.key,
    fields=[
       search.TextField(name='name', value=unicode(self.name)),
       search.TextField(name='description', value=unicode(self.description))
       ])
    search.Index(name=INDEX_NAME).put(doc)
    """

  def card(self):
  	return flask.url_for('lesson_card',lesson_id=self.key.id())

  #returns html of card
  def load_card(self):
  	return flask.render_template(
      'shared/load_card.html',
      card=self.card(),
      card_id=self.key.urlsafe(),
    )

  def data_in_json(self):
    data = json.loads(self.data)
    return data

  @classmethod
  def _post_delete_hook(cls, key, future):
    index = search.Index(INDEX_NAME)
    index.delete(key)

  @classmethod
  def search(cls, query):
    index = search.Index(INDEX_NAME)
    return index.search(query)

  FIELDS = {
    'data': fields.String,
    'is_a': fields.String,
    'lesson_versions': fields.Key,
    'description': fields.String,
    'quiz': fields.Key,
    'topics': fields.Key
  }

  FIELDS.update(model.Base.FIELDS)