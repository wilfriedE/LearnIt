class Course < ActiveRecord::Base
  has_many :course_lessons
  has_many :lessons,  -> { distinct }, through: :course_lessons
end
