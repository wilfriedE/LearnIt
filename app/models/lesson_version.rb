class LessonVersion < ApplicationRecord
  REACT_PLAYER_TYPES = 1..2

  validates :media_type, :creator, :name, :description, :data, presence: true
  belongs_to :creator, class_name: 'User'

  enum media_type: { rich_text: 0, youtube_video: 1, vimeo_video: 2 }
  enum approval: { awaiting_approval: 0, approved: 1, rejected: 2 }

  def data
    raw_data = self[:data] || {}.to_s
    @json_data ||= JSON.parse(raw_data, object_class: OpenStruct)
  end
end
