class LessonVersion < ActiveRecord::Base
  belongs_to :lesson
  belongs_to :media, class_name: "MediaContent", foreign_key: "media_id", :dependent => :destroy
  validates_presence_of :name, :media
  accepts_nested_attributes_for :media, allow_destroy: true
end
