class Course < ActiveRecord::Base
  has_many :track_courses
  has_many :tracks, -> { distinct }, through: :track_courses
  has_many :course_lessons, -> { distinct }
  has_many :lessons,  -> { distinct }, through: :course_lessons
  has_many :topic_items, as: :topicable
  has_many :topics, -> { distinct }, through: :topic_items
  accepts_nested_attributes_for :course_lessons, :reject_if => :all_blank, :allow_destroy => true
  accepts_nested_attributes_for :topic_items, :reject_if => :all_blank, :allow_destroy => true
  validates :name, presence: true

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
