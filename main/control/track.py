# coding: utf-8
import logging
from flask.ext import wtf
import flask
import wtforms

from google.appengine.ext import ndb

import auth
import config
import model
import util
import task
import json

from main import app


###############################################################################
# Track List
###############################################################################
@app.route('/admin/track/')
@auth.admin_required
def track_list():
  track_dbs = model.Track.query().fetch()
  return flask.render_template(
      'track/track_list.html',
      html_class='track-list',
      title='Track List',
      track_dbs=track_dbs,
      api_url=flask.url_for('api.track.list'),
    )

###############################################################################
# Track View
###############################################################################
@app.route('/track/<track_key>/')
def track(track_key):
  track_db = ndb.Key(urlsafe=track_key).get()    
  return flask.render_template(
      'track/track.html',
      track_db = track_db,
      title= 'track',
      html_class='track-view',
    )

@app.route('/card/t/<track_id>')
def track_card(track_id):
  track_db = model.Track.get_by_id(int(track_id)) 
  return flask.render_template(
      'track/track_card.html',
      title='track card',
      track_db=track_db,
      html_class='track-card',
    )

###############################################################################
# New Track
###############################################################################
class NewTrackForm(wtf.Form):
  name = wtforms.StringField(
      'Name',
      [wtforms.validators.required()], filters=[util.strip_filter],
    )
  topics = wtforms.StringField('Topics')
  description = wtforms.TextAreaField(
      'Description', [wtforms.validators.Length(min=2, max=400)],
    )
  courses = wtforms.StringField('Courses', [wtforms.validators.required()])
  track_id = wtforms.HiddenField() #This field is only nesessary when creating a new version of an existing track.

@app.route('/track/create')
@auth.login_required
def new_track():
  """Renders the new track creation page"""
  form = NewTrackForm()
  return flask.render_template(
      'track/track_update.html',
      title='New Track',
      post_path=flask.url_for('api.track.new'),
      form_method="POST",
      form=form,
      html_class='track',
    )

##This would be the process where users can propose new versions for a track. These would of track need approval.
@app.route('/track/<track_id>/update/')
@auth.login_required
def track_update(track_id):
  track_db = model.Track.get_by_id(int(track_id))
  form = NewTrackForm(name = track_db.name, description = track_db.description,
   topics = ','.join([ key.urlsafe() for key in track_db.topics]), 
   courses = ','.join([ key.urlsafe() for key in track_db.get_courses()]), track_id = track_db.key.id())
  return flask.render_template(
      'track/track_update.html',
      title='track Update',
      post_path=flask.url_for('api.track', track_key=track_db.key.urlsafe()),
      form_method="POST",
      form=form,
      track_db=track_db,
      html_class='track-update',
    )
