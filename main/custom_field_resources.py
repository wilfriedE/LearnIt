"""
Most of the logics relating to constructing the data scheme for the lessons would be here.
"""
import urlparse
import json

BASE_DATA = {
  "version": "0.0",
  "source" : "None",
  "original_string": "None",
}

def youtube_data_builder(data):
  url_data = urlparse.urlparse(data['youtube_video_url'])
  query = urlparse.parse_qs(url_data.query)
  BASE_DATA["video_id"] = query["v"][0]
  BASE_DATA["source"] = "youtube"
  BASE_DATA["original_string"] = str(data)
  return json.dumps(BASE_DATA)

def vimeo_data_builder(data):
  url_data = urlparse.urlparse(data['vimeo_video_url'])
  BASE_DATA["video_id"] = url_data.path.lstrip("/")
  BASE_DATA["source"] = "vimeo"
  BASE_DATA["original_string"] = str(data)
  return json.dumps(BASE_DATA)

def data_scheme_constructor(content_type, data={}):
  if content_type == 'youtube-video':
    return youtube_data_builder(data)
  if content_type == 'vimeo-video':
    return vimeo_data_builder(data)
  return None

def rerieve_content_fields(util):
  if util.param('is_a') == 'youtube-video':
    return {'youtube_video_url': util.param('youtube_video_url')}
  if util.param('is_a') == 'vimeo-video':
    return {'vimeo_video_url': util.param('vimeo_video_url')}
  return None

def upgrade_data_scheme():
  #update data schreme to newer version
  pass

def connected_entities_constructor(asc_entities_keys):#ascending list order of entity keys
  CNF = {}
  e_previous = None
  e_next = None
  limit = len(asc_entities_keys)
  for index, key in enumerate(asc_entities_keys):
    if index+1 < limit:
      e_next = index+1
    else:
      e_next = None
    CNF[index] = {
      "e_next" : e_next,
      "e_value" : key,
      "e_previous": e_previous,
    }
    e_previous = index
  return json.dumps(CNF)