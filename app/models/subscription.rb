class Subscription < ActiveRecord::Base
  belongs_to :subscription, polymorphic: true
  belongs_to :subscriber, polymorphic: true
  validates_uniqueness_of :subscriber_id, :scope => [:subscriber_type, :subscription_type, :subscription_id]

  def mark_as_read
    self.marking = self.markings[0]
  end

  def mark_as_unread
    self.marking = self.markings[1]
  end

  private
    def self.markings
        ["READ", "UNREAD"]
    end
end
