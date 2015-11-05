# coding: utf-8

from __future__ import absolute_import
import flask
from google.appengine.ext import ndb

from api import fields
import config
import util


class Base(ndb.Model):
  created = ndb.DateTimeProperty(auto_now_add=True)
  modified = ndb.DateTimeProperty(auto_now=True)
  version = ndb.IntegerProperty(default=config.CURRENT_VERSION_TIMESTAMP)
  dependents = ndb.KeyProperty(repeated=True)
  owners = ndb.KeyProperty(repeated=True)

  #returns html of card
  def load_card(self):
    if self.card():
      return flask.render_template(
        'shared/load_card.html',
        card=self.card(),
        card_id=self.key.urlsafe(),
      )
    return "Entity has no card"  

  @classmethod
  def get_by(cls, name, value):
    return cls.query(getattr(cls, name) == value).get()

  @classmethod
  def get_dbs(cls, query=None, ancestor=None, order=None, limit=None, cursor=None, **kwargs):
    return util.get_dbs(
        query or cls.query(ancestor=ancestor),
        limit=limit or util.param('limit', int),
        cursor=cursor or util.param('cursor'),
        order=order or util.param('order'),
        **kwargs
      )

  FIELDS = {
      'key': fields.Key,
      'id': fields.Id,
      'version': fields.Integer,
      'created': fields.DateTime,
      'modified': fields.DateTime,
    }
