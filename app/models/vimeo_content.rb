class VimeoContent < MediaContent
  validates :video_url, presence: true, format: { with: /https?:\/\/(?:[\w]+\.)*vimeo\.com(?:[\/\w]*\/?)?\/(?<id>[0-9]+)[^\s]*/i }

  def vimeo_id
    return Regexp.last_match(1) if video_url[/https?:\/\/(?:[\w]+\.)*vimeo\.com(?:[\/\w]*\/?)?\/(?<id>[0-9]+)[^\s]*/]
  end
end
