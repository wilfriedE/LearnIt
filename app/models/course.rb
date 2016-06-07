class Course < ActiveRecord::Base
  has_many :course_lessons
  has_many :lessons,  -> { distinct }, through: :course_lessons
  accepts_nested_attributes_for :course_lessons, :reject_if => :all_blank, :allow_destroy => true
end
