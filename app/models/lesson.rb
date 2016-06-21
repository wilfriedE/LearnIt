class Lesson < ActiveRecord::Base
  default_scope { order('updated_at ASC') }
  has_many :versions, -> { distinct }, foreign_key: :lesson_id, :class_name => "LessonVersion"
  belongs_to :active_version, class_name: "LessonVersion", foreign_key: "active_version_id"
  validates :active_version_id, presence: true
  has_many :course_lessons
  has_many :courses, -> { distinct }, through: :course_lessons

  def name
    self.active_version.name
  end

  def description
    self.active_version.description
  end

  def media
    self.active_version.media
  end

  def color
    self.active_version.color || ""
  end

  def topics
    self.active_version.topics
  end

  def self.search(search)
    joins(:active_version).where("lesson_versions.name LIKE ? OR lesson_versions.description LIKE ?", "%#{search}%", "%#{search}%").distinct
  end

  def as_json(options={})
    super(:only => [:id],
          :methods => [:name, :description, :color],
          :include => {
            :versions => {:only => [:id, :name, :description]}
          }
    )
  end
end
