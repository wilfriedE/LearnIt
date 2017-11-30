class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable,
         :confirmable, :lockable

  before_create :set_default_role

  has_many :role_users, dependent: :destroy
  has_many :roles, through: :role_users
  has_many :collections, as: :creator
  has_many :lesson_versions, as: :creator
  has_many :notifications, as: :recipient

  validates :nickname, uniqueness: true

  def unseen_notication_count
    notifications.select { |n| !n.seen? }.count
  end

  def new_notifications?
    return false if notifications.count <= 0
    notifications.first.unread?
  end

  def latest_notifications
    notifications.first(5)
  end

  def visitor?
    roles.include?(Role.find_or_create_by(name: :visitor))
  end

  def make_contributor!
    roles << Role.find_or_create_by(name: :contributor) unless contributor?
  end

  def contributor?
    roles.include?(Role.find_or_create_by(name: :contributor))
  end

  def make_moderator!
    make_contributor!
    roles << Role.find_or_create_by(name: :moderator) unless moderator?
  end

  def moderator?
    roles.include?(Role.find_or_create_by(name: :moderator))
  end

  def make_admin!
    make_moderator!
    roles << Role.find_or_create_by(name: :admin) unless admin?
  end

  def admin?
    roles.include?(Role.find_or_create_by(name: :admin))
  end

  def make_editor!
    make_contributor!
    roles << Role.find_or_create_by(name: :editor) unless editor?
  end

  def editor?
    roles.include?(Role.find_or_create_by(name: :editor))
  end

  def ban!
    role_users.destroy_all
    roles << Role.find_or_create_by(name: :banned) unless banned?
  end

  def banned?
    roles.include?(Role.find_or_create_by(name: :banned))
  end

  def set_default_role
    roles << Role.find_or_create_by(name: :visitor)
  end
end
