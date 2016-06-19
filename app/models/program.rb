class Program < ActiveRecord::Base
  validates :name, presence: true

  def self.default
    Program.find_by_name("General")
  end

  def self.search(search)
    Program.where("name LIKE ? OR description LIKE ?", "%#{search}%", "%#{search}%").distinct
  end

  def as_json(options={})
    super(:only => [:id, :name, :description]
    )
  end
end
