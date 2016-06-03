class YoutubeContent < MediaContent
  validates :video_url, presence: true
end
