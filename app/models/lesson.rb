class Lesson < ApplicationRecord
  belongs_to :active_version, class_name: "LessonVersion"
  has_many   :lesson_versions
  has_many   :collection_items, as: :collectible
  has_many   :collections, through: :collection_items

  validates  :active_version, presence: true

  delegate :name, :description, :media_type, :approval,
           :awaiting_approval?, :approved?, :rejected?, :data, to: :active_version
end
