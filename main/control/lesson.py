# coding: utf-8

from flask.ext import wtf
import flask
import wtforms

import auth
import config
import util
import task

from main import app
###############################################################################
# Lesson View
###############################################################################
@app.route('/lesson/<lesson_key>/v/<version_key>')
@app.route('/lesson/<lesson_key>')
@app.route('/course/<course_key>/l/<lesson_key>')
def lesson(lesson_key, version_key, course_key):

  #set default lesson version key to the retrieved lesson's key
  #if there is a version key then set the lesson version key to it
  if version_key:
    lesson_version_key = version_key
  #Set a condition to verify there is a course. 
  #In order to activate the next and previous lesson button in the view

  lesson = {"name":"Hello Lesson",}
  return flask.render_template(
      'lesson/lesson.html',
      title=lesson['name'],
      html_class='lesson-view',
      lesson_version_key=lesson_version_key,
      lesson=lesson,
    )


@app.route('/lesson_version/<version_key>')
def render_lesson_version(version_key):  
  return flask.render_template(
      'lesson/lesson_version.html',
      title='',
      html_class='lesson_version',
      lesson=#Only need to find the lesson version by version key,
    )


###############################################################################
# New Lesson
###############################################################################
@app.route('/new_lesson/', methods=['GET','POST'])
@auth.login_required
def new_lesson():
  user_db = auth.current_user_db()
  form = ProfileUpdateForm(obj=user_db)
  wtforms
  return flask.render_template(
      'lesson/lesson.html',
      title=lesson['name'],
      html_class='lesson-version-view',
      lesson=lesson,
    )

###############################################################################
# Profile Update
###############################################################################
#class ProfileUpdateForm(wtf.Form):
#  name = wtforms.StringField(
#      'Name',
#      [wtforms.validators.required()], filters=[util.strip_filter],
#    )
#  email = wtforms.StringField(
#      'Email',
#      [wtforms.validators.optional(), wtforms.validators.email()],
#      filters=[util.email_filter],
#    )
#
#
#@app.route('/profile/update/', methods=['GET', 'POST'])
#@auth.login_required
#def profile_update():
#  user_db = auth.current_user_db()
#  form = ProfileUpdateForm(obj=user_db)
#
#  if form.validate_on_submit():
#    email = form.email.data
#    if email and not user_db.is_email_available(email, user_db.key):
#      form.email.errors.append('This email is already taken.')
#
#    if not form.errors:
#      send_verification = not user_db.token or user_db.email != email
#      form.populate_obj(user_db)
#      if send_verification:
#        user_db.verified = False
#        task.verify_email_notification(user_db)
#      user_db.put()
#      return flask.redirect(flask.url_for('profile'))
#
#  return flask.render_template(
#      'profile/profile_update.html',
#      title=user_db.name,
#      html_class='profile-update',
#      form=form,
#      user_db=user_db,
#    )
#
#
################################################################################
## Profile Password
################################################################################
#class ProfilePasswordForm(wtf.Form):
#  old_password = wtforms.StringField(
#      'Old Password', [wtforms.validators.optional()],
#    )
#  new_password = wtforms.StringField(
#      'New Password',
#      [wtforms.validators.required(), wtforms.validators.length(min=6)]
#    )
#
#
#@app.route('/profile/password/', methods=['GET', 'POST'])
#@auth.login_required
#def profile_password():
#  if not config.CONFIG_DB.has_email_authentication:
#    flask.abort(418)
#  user_db = auth.current_user_db()
#  form = ProfilePasswordForm(obj=user_db)
#
#  if form.validate_on_submit():
#    errors = False
#    old_password = form.old_password.data
#    new_password = form.new_password.data
#    if new_password or old_password:
#      if user_db.password_hash:
#        if util.password_hash(user_db, old_password) != user_db.password_hash:
#          form.old_password.errors.append('Invalid current password')
#          errors = True
#      if not errors and old_password and not new_password:
#        form.new_password.errors.append('This field is required.')
#        errors = True
#
#      if not (form.errors or errors):
#        user_db.password_hash = util.password_hash(user_db, new_password)
#        flask.flash('Your password has been changed.', category='success')
#
#    if not (form.errors or errors):
#      user_db.put()
#      return flask.redirect(flask.url_for('profile'))
#
#  return flask.render_template(
#      'profile/profile_password.html',
#      title=user_db.name,
#      html_class='profile-password',
#      form=form,
#      user_db=user_db,
#    )
