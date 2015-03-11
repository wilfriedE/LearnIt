# coding: utf-8
import logging
from flask.ext import wtf
import flask
import wtforms

import auth
import config
import model
import util
import task
import urlparse
import json
##import cgi

##import gdata.service
##import gdata.youtube
##import gdata.youtube.service
##import gdata.media
##import gdata.geo
##import gdata.alt.appengine

from main import app


###############################################################################
# Course View
###############################################################################
