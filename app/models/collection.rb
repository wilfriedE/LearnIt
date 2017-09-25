class Collection < ApplicationRecord
  belongs_to :creator, class_name: "User"
  has_many   :collection_items, -> { order(position: :asc) }, dependent: :destroy
  has_many   :lessons, through: :collection_items, source: :collectible, source_type: 'Lesson'
  has_many   :lesson_versions, through: :collection_items, source: :collectible, source_type: 'LessonVersion'
  has_many   :collections, through: :collection_items, source: :collectible, source_type: 'Collection'

  validates :name, :description, :creator, presence: true

  accepts_nested_attributes_for :collection_items

  enum approval: { awaiting_approval: 0, approved: 1, rejected: 2 }
end
