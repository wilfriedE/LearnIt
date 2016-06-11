class Course < ActiveRecord::Base
  has_many :course_lessons, -> { distinct }
  has_many :lessons,  -> { distinct }, through: :course_lessons
  accepts_nested_attributes_for :course_lessons, :reject_if => :all_blank, :allow_destroy => true
  validates :name, presence: true

  def self.search(search)
    Course.where("name LIKE ? OR description LIKE ?", "%#{search}%", "%#{search}%").distinct
  end

  def as_json(options={})
    super(:only => [:id],
          :methods => [:name, :description],
          :include => {
            :lessons => {:only => [:id, :name, :description]}
          }
    )
  end
end
