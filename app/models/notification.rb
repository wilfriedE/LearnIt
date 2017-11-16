class Notification < ApplicationRecord
  belongs_to :recipient, polymorphic: true
  default_scope { order(read_status: :asc) }

  validates :name, :description, :recipient, presence: true

  enum read_status: { unread: 0, read: 1 }

  def mark_as_read
    read!
  end
end
