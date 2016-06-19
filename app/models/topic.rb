class Topic < ActiveRecord::Base
  validates :name, presence: true, :uniqueness => {:case_sensitive => false}

  def as_json(options={})
    super(:only => [:id, :name, :description]
    )
  end

  def self.search(search)
    Topic.where("name LIKE ? OR description LIKE ?", "%#{search}%", "%#{search}%").distinct
  end
end
