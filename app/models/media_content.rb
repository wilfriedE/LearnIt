class MediaContent < ActiveRecord::Base

  #class method for content types available
  def self.types
    ["YoutubeContent", "VimeoContent"]
  end
end
