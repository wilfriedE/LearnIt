class Team < ApplicationRecord
  belongs_to :program
  validates_presence_of :name, :number, :program
  validates :number, :uniqueness => {:scope => [:program]}
end
