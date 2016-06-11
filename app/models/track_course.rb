class TrackCourse < ActiveRecord::Base
  before_save :check_for_existing
  default_scope { order('position ASC') }
  belongs_to :track
  belongs_to :course
  validates :course_id, presence: true
  validates :position, presence: true

  private
  def check_for_existing
    TrackCourse.where(course_id: self.course_id, track_id: self.track_id).each { |track_course|
      if self.id != track_course.id
        track_course.destroy()
      end
     }
  end
end
