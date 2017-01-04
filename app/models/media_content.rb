class MediaContent < ApplicationRecord

  #class method for content types available
  def self.types
    ["YoutubeContent", "VimeoContent"]
  end
end
