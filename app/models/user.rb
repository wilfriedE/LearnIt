class User < ApplicationRecord
  # Include default devise modules. Others available are:
  #, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable,
         :confirmable, :lockable

  ROLES_T = {0 => 'USER', 1 => 'MOD', 2 => 'ADMIN'}
  ROLES = {ROLES_T[0].to_sym => 'User', ROLES_T[1].to_sym => 'Moderator', ROLES_T[2].to_sym => 'Administrator'}

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

  def make_moderator
    return if self.moderator?
    self.role = ROLES_T[1]
  end

  def moderator?
    self.role == ROLES_T[1]
  end

  def make_admin
    return if self.admin?
    self.role = ROLES_T[2]
  end

  def admin?
    self.role == ROLES_T[2]
  end

  def editor?
    self.role == ROLES_T[2] #TODO change to support different role model
  end
end
