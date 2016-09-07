class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  #, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable,
         :confirmable, :lockable

  has_many :contributions, as: :contributor, dependent: :destroy
  has_many :subscriptions, as: :subscriber, dependent: :destroy
  has_many :assignments, as: :claimer, dependent: :destroy
  has_many :mod_ticket_activities, lambda { where(type: 'ModTicketActivity') }, through: :assignments, source: :assignable, source_type: "Activity"
  has_many :user_feed_activities, lambda { where(type: 'UserFeedActivity') }, through: :subscriptions, source: :subscription, source_type: "Activity"
  has_many :general_feed_activities, lambda { where(type: 'GeneralFeedActivity') }, through: :subscriptions, source: :subscription, source_type: "Activity"
  validates_uniqueness_of :nickname

  def tickets
    mod_ticket_activities
  end

  def notifications
    user_feed_activities + general_feed_activities
  end

  def is_current_user(user)
    if self.id == user.id
      return true
    end
    return false
  end
end
