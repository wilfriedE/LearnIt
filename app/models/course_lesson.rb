class CourseLesson < ActiveRecord::Base
  default_scope { order('position ASC') }
  belongs_to :course
  belongs_to :lesson
end
