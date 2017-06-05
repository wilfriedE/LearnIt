class User < ApplicationRecord
  # Include default devise modules. Others available are:
  #, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable,
         :confirmable, :lockable

  before_create :set_default_role

  has_many :role_users, dependent: :destroy
  has_many :roles, through: :role_users
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

  def contributor?
    self.roles.include?(Role.find_by_name(:contributor))
  end

  def make_moderator
    return if self.moderator?
    self.roles << Role.find_by_name(:moderator)
  end

  def moderator?
    self.roles.include?(Role.find_by_name(:moderator))
  end

  def make_admin
    return if self.admin?
    self.roles << Role.find_by_name(:admin)
  end

  def admin?
    self.roles.include?(Role.find_by_name(:admin))
  end

  def make_editor
    return if self.editor?
    self.roles << Role.find_by_name(:editor)
  end

  def editor?
    self.roles.include?(Role.find_by_name(:editor))
  end

  def ban
    return if self.banned?
    self.roles << Role.find_by_name(:banned)
  end

  def banned?
    self.roles.include?(Role.find_by_name(:banned))
  end

  def set_default_role
    if Platform.instance.all_contributor? && Role.find_by_name(:contributor)
      self.roles << Role.find_by_name(:contributor)
    end
  end
end
