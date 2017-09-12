class Page < ApplicationRecord
  validates :name,  uniqueness: true, presence: true
  validates :title, presence: true
end
