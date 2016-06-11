class Program < ActiveRecord::Base
  validates :name, presence: true

  def self.default
    Program.find_by_name("General")
  end
end
