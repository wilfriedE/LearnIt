module Subscribable
  extend ActiveSupport::Concern

  included do
    has_many :subscriptions, as: :subscription, dependent: :destroy
    has_many :subscribers, -> { distinct}, through: :subscriptions, source_type: "User"
  end

  def subscribe(user)
    #change to support various subscriber type if available
    if !(self.subscribers.size > 0 && self.subscribers.include?(user))
      self.subscribers += [user]
    end
  end

def unsubscribe(user)
      self.subscriptions.where(subscriber: user).each { |subscription|
        subscription.destroy!
      }
  end

  def mark_as_read_by(user)
      self.subscriptions.where(subscriber: user).mark_as_read()
  end

  def mark_as_unread_by(user)
      self.subscriptions.where(subscriber: user).mark_as_unread()
  end

end
