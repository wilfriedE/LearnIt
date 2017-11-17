class Notification < ApplicationRecord
  belongs_to :recipient, polymorphic: true
  default_scope { order(read_status: :asc) }

  validates :name, :description, :recipient, presence: true

  enum read_status: { unread: 0, seen: 1, read: 2 }
end
