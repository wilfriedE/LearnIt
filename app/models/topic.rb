class Topic < ApplicationRecord
  has_many :topic_items, dependent: :destroy
  has_many :courses, -> { distinct }, through: :topic_items, source: :topicable, source_type: 'Course'
  has_many :tracks, -> { distinct },  through: :topic_items, source: :topicable, source_type: 'Track'
  has_many :lesson_versions, -> { distinct }, through: :topic_items, source: :topicable, source_type: 'LessonVersion'
  has_many :lessons, -> { distinct }, through: :lesson_versions
  validates :name, presence: true, uniqueness: true

  def as_json(_options = {})
    super(only: %i[id name description])
  end

  def self.search(search)
    Topic.where("name LIKE ? OR description LIKE ?", "%#{search}%", "%#{search}%").distinct
  end
end
