class YoutubeContent < MediaContent
  validates :video_url, presence: true, format: { with: /\/\/(?:www\.)?youtu(?:\.be|be\.com)\/(?:watch\?v=|embed\/)?([a-z0-9_\-]+)/i }

  def youtube_id
    if video_url[/youtu\.be\/([^\?]*)/]
      youtube_id = Regexp.last_match(1)
    else
      video_url[/^.*((v\/)|(embed\/)|(watch\?))\??v?=?([^\&\?]*).*/]
      youtube_id = Regexp.last_match(5)
    end
    youtube_id
  end
end
