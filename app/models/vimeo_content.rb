class VimeoContent < MediaContent
  validates :video_url, presence: true, :format => {:with => /https?:\/\/(?:[\w]+\.)*vimeo\.com(?:[\/\w]*\/?)?\/(?<id>[0-9]+)[^\s]*/i}

  def vimeo_id
    if self.video_url[/https?:\/\/(?:[\w]+\.)*vimeo\.com(?:[\/\w]*\/?)?\/(?<id>[0-9]+)[^\s]*/]
      return $1
    end
    return
  end
end
