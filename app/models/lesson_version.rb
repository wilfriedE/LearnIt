class LessonVersion < ActiveRecord::Base
  belongs_to :lesson
  belongs_to :media, class_name: "MediaContent", foreign_key: "media_id"
  validates_presence_of :name, :lesson
end
