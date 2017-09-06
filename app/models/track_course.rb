class TrackCourse < ApplicationRecord
  before_save :check_for_existing
  default_scope { order('position ASC') }
  belongs_to :track
  belongs_to :course
  validates :course_id, presence: true
  validates :position, presence: true

  private

  def check_for_existing
    TrackCourse.for_each(course_id: course_id, track_id: track_id).each do |track_course|
      track_course.destroy if id != track_course.id
    end
  end
end
