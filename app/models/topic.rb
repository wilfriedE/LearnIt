class Topic < ActiveRecord::Base
  validates :name, presence: true
end
