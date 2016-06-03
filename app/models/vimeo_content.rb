class VimeoContent < MediaContent
  validates :video_url, presence: true
end
