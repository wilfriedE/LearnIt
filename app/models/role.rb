class Role < ApplicationRecord
  TYPES = %i[admin editor moderator contributor banned visitor].freeze

  has_many :role_users, dependent: :destroy
  has_many :users, through: :role_users

  validates :name, presence: true, uniqueness: { case_sensitive: false, allow_blank: true }
end
