class CourseLesson < ActiveRecord::Base
  before_save :check_for_existing
  default_scope { order('position ASC') }
  belongs_to :course
  belongs_to :lesson
  validates :lesson_id, presence: true
  validates :position, presence: true

  private
  def check_for_existing
    CourseLesson.where(lesson_id: self.lesson_id, course_id: self.course_id).each { |course_lesson|
      if self.id != course_lesson.id
        course_lesson.destroy()
      end
     }
  end
end
