class Course < ApplicationRecord
  default_scope { order('updated_at ASC') }
  has_many :track_courses, dependent: :destroy
  has_many :tracks, -> { distinct }, through: :track_courses
  has_many :course_lessons, -> { distinct }
  has_many :lessons,  -> { distinct }, through: :course_lessons
  has_many :topic_items, as: :topicable, dependent: :destroy
  has_many :topics, -> { distinct }, through: :topic_items
  has_many :contributions, as: :contribution, dependent: :destroy
  has_many :user_contributors, through: :contributions, source: :contributor, :source_type => 'User'
  accepts_nested_attributes_for :course_lessons, :reject_if => :all_blank, :allow_destroy => true
  accepts_nested_attributes_for :topic_items, :reject_if => :all_blank, :allow_destroy => true
  accepts_nested_attributes_for :contributions, :reject_if => :all_blank, :allow_destroy => true
  validates :name, presence: true

  def contributors
    return self.user_contributors.uniq
  end

  def as_json(options={})
    super(:only => [:id, :name, :description],
          :include => {
            :lessons => {:only => [:id, :name, :description]}
          }
    )
  end

  def self.search(search)
    Course.where("name LIKE ? OR description LIKE ?", "%#{search}%", "%#{search}%").distinct
  end
end
