# coding: utf-8

from __future__ import absolute_import

import hashlib
import random

from google.appengine.ext import ndb

from api import fields
import model
import util
import config
import json

class LessonVersion(model.Base):
  #  Different versions of a lesson
  name = ndb.StringProperty(required=True)
  description = ndb.TextProperty()
  data = ndb.StringProperty(required=True)
  topics = ndb.KeyProperty(kind='Topic', repeated=True)
  lesson = ndb.KeyProperty(kind='Lesson')
  popularity = ndb.IntegerProperty()
  contributor = ndb.KeyProperty(kind='User')
  approved = ndb.BooleanProperty(default=False)
  quiz = ndb.KeyProperty(kind='Quiz')
  vote = ndb.KeyProperty(kind='Vote')
  color = ndb.StringProperty()

  def _pre_put_hook(self):
    #Generate Color if non already
    if not self.color:
      r = lambda: random.randint(0,255)
      self.color = ('#%02X%02X%02X' % (r(),r(),r()))

  # Return the Latest version. After some logical procession.
  # Replace every attribute of the lesson to become those of this lesson version.
  # Instead of replacing contributor, add to contributors if the current contributor is not already in the lesson contributors
  def assign_as_latest_version(self):
    lesson = self.lesson.get()
    lesson.latest_version = self.key
    lesson.data = self.data
    lesson.name = self.name
    lesson.description = self.description
    lesson.topics = self.topics
    lesson.vote = self.vote
    if self.contributor not in lesson.contributors:
      lesson.contributors = lesson.contributors + [self.contributor]
    lesson.put()
                     

  def _post_put_hook(self, future):
    #After an update update the lesson's properties if this version is the parent lesson's latest version
    # use assign_as_latest_version(self)
    if self.key == self.lesson.get().latest_version:
      assign_as_latest_version(self)
    

  def data_in_json(self):
    data = json.loads(self.data)
    return data

###############################################################################
# Notes for This Class
###############################################################################
# It would be a good idea to make sure that a new version is not exactly equal to any previous versions.
# Write a delete method for a lesson version. Make sure the user is authenticated first that only the creator
# and moderators are alloweed to delete a lesson version
# When a lesson version is deleted, remove it from the main lesson's lesson versions.