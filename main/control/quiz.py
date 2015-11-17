# coding: utf-8

from flask.ext import wtf
import flask
import wtforms

from google.appengine.ext import ndb

import auth
import config
import model
import util
import task

from main import app


###############################################################################
# Quiz View
###############################################################################
@app.route('/quiz/<lesson_key>/create')
@auth.login_required
def quiz_creator(lesson_key):
  user_db = auth.current_user_db()

  return flask.render_template(
      'quiz/quiz_update.html',
      title="Quiz Creator",
      html_class='quiz-view',
      user_db=user_db,
    )