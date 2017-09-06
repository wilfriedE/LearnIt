class CourseLesson < ApplicationRecord
  before_save :check_for_existing
  default_scope { order('position ASC') }
  belongs_to :course
  belongs_to :lesson
  validates :lesson_id, presence: true
  validates :position, presence: true

  private

  def check_for_existing
    CourseLesson.find_each(lesson_id: lesson_id, course_id: course_id).each do |course_lesson|
      course_lesson.destroy if id != course_lesson.id
    end
  end
end
