class Topic < ActiveRecord::Base
  has_many :topic_items
  has_many :courses, -> { distinct }, through: :topic_items, source: :topicable, :source_type => 'Course'
  has_many :tracks, -> { distinct }, through: :topic_items, source: :topicable, :source_type => 'Track'
  has_many :lesson_versions, -> { distinct }, through: :topic_items, source: :topicable, :source_type => 'LessonVersion'
  has_many :lessons, -> { distinct }, through: :lesson_versions
  validates :name, presence: true, :uniqueness => {:case_sensitive => false}

  def as_json(options={})
    super(:only => [:id, :name, :description]
    )
  end

  def self.search(search)
    Topic.where("name LIKE ? OR description LIKE ?", "%#{search}%", "%#{search}%").distinct
  end
end
