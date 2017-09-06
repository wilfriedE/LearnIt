class Subscription < ApplicationRecord
  belongs_to :subscription, polymorphic: true
  belongs_to :subscriber,   polymorphic: true
  validates :subscriber_id, uniqueness: true, scope: %i[subscriber_type subscription_type subscription_id]

  def mark_as_read
    self.marking = markings[0]
  end

  def mark_as_unread
    self.marking = markings[1]
  end

  def self.markings
    ["READ", "UNREAD"]
  end
end
