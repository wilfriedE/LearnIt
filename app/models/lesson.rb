class Lesson < ActiveRecord::Base
  has_many :versions, foreign_key: :lesson_id, :class_name => "LessonVersion"
  belongs_to :active_version, class_name: "LessonVersion", foreign_key: "active_version_id"
  validates :active_version_id, presence: true

  def name
    self.active_version.name
  end

  def description
    self.active_version.description
  end

  def media
    self.active_version.media
  end

  def color
    self.active_version.color
  end
end
