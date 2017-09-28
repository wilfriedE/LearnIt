class CollectionItem < ApplicationRecord
  belongs_to :collection

  belongs_to :collectible, polymorphic: true
  validates  :collection, :position, :collectible, presence: true
  validates  :collectible_id, uniqueness: { scope: [:collection, :collectible_type] }

  def lesson?
    collectible.is_a? Lesson
  end

  def lesson_version?
    collectible.is_a? LessonVersion
  end

  def collection?
    collectible.is_a? Collection
  end
end
