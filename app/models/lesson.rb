class Lesson < ApplicationRecord
  validates   :active_version, presence: true
  belongs_to  :active_version, class_name: "LessonVersion"

  delegate :name, :description, :media_type, :data, to: :active_version
end
