class Lesson < ApplicationRecord
  belongs_to :active_version, class_name: "LessonVersion"
  has_many   :lesson_versions
  has_many   :collection_items, as: :collectible
  has_many   :collections, through: :collection_items

  validates  :active_version, presence: true

  delegate :name, :description, :media_type, :approval,
           :awaiting_approval?, :approved?, :rejected?, :archived?, :data, to: :active_version

  def lesson_subscribers
    subscribers = []
    lesson_versions.map(&:creator).each do |creator|
      subscribers << creator unless subscribers.include? creator
    end
    subscribers
  end
end
