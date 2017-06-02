class Page < ApplicationRecord
  validates :name, uniqueness: true, presence: true
  validates_presence_of :title, :body
end
