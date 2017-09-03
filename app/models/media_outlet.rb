class MediaOutlet < ApplicationRecord
  belongs_to :outlet, polymorphic: true
  belongs_to :content, polymorphic: true
  belongs_to :media_content
end
