class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable,
         :confirmable, :lockable

  before_create :set_default_role

  has_many :role_users, dependent: :destroy
  has_many :roles, through: :role_users
  has_many :contributions, as: :contributor, dependent: :destroy
  has_many :subscriptions, as: :subscriber, dependent: :destroy
  has_many :assignments, as: :claimer, dependent: :destroy
  has_many :mod_ticket_activities, -> { where(type: 'ModTicketActivity') }, through: :assignments, source: :assignable, source_type: "Activity"
  has_many :user_feed_activities, -> { where(type: 'UserFeedActivity') }, through: :subscriptions, source: :subscription, source_type: "Activity"
  has_many :general_feed_activities, -> { where(type: 'GeneralFeedActivity') }, through: :subscriptions, source: :subscription, source_type: "Activity"
  validates :nickname, uniqueness: true

  def tickets
    mod_ticket_activities
  end

  def notifications
    user_feed_activities + general_feed_activities
  end

  def current_user?(user)
    id == user.id
  end

  def contributor?
    roles.include?(Role.find_by(name: :contributor))
  end

  def make_moderator!
    roles << Role.find_by(name: :moderator) unless moderator?
  end

  def moderator?
    roles.include?(Role.find_by(name: :moderator))
  end

  def make_admin!
    roles << Role.find_by(name: :admin) unless admin?
  end

  def admin?
    roles.include?(Role.find_by(name: :admin))
  end

  def make_editor!
    roles << Role.find_by(name: :editor) unless editor?
  end

  def editor?
    roles.include?(Role.find_by(name: :editor))
  end

  def ban
    roles << Role.find_by(name: :banned) unless banned?
  end

  def banned?
    roles.include?(Role.find_by(name: :banned))
  end

  def set_default_role
    roles << Role.find_by(name: :contributor) if Role.find_by(name: :contributor)
  end
end
