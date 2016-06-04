class YoutubeContent < MediaContent
  validates :video_url, presence: true, :format => {:with => /\/\/(?:www\.)?youtu(?:\.be|be\.com)\/(?:watch\?v=|embed\/)?([a-z0-9_\-]+)/i}

  def youtube_id
    if self.video_url[/youtu\.be\/([^\?]*)/]
      youtube_id = $1
    else
      self.video_url[/^.*((v\/)|(embed\/)|(watch\?))\??v?=?([^\&\?]*).*/]
      youtube_id = $5
    end
    return youtube_id
  end
end
