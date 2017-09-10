class Lesson < ApplicationRecord
  default_scope { order('updated_at ASC') }
  has_many :versions, -> { distinct }, foreign_key: :lesson_id, class_name: "LessonVersion"
  belongs_to :active_version, class_name: "LessonVersion", foreign_key: "active_version_id"
  validates :active_version_id, presence: true
  has_many :course_lessons, dependent: :destroy
  has_many :courses, -> { distinct }, through: :course_lessons

  delegate :name, to: :active_version
  delegate :description, to: :active_version
  delegate :media, to: :active_version
  delegate :color, to: :active_version
  delegate :topics, to: :active_version

  def contributors
    versions.map { |v| v.contributors unless v.contributors.empty? || v.contributors.nil? }.uniq.flatten
  end

  def self.search(search)
    joins(:active_version).where("lesson_versions.name LIKE ? OR lesson_versions.description LIKE ?", "%#{search}%", "%#{search}%").distinct
  end

  def as_json(_options = {})
    super(only: [:id],
          methods: %i[name description color],
          include: {
            versions: { only: %i[id name description] }
          }
    )
  end
end
