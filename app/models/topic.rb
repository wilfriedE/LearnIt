class Topic < ActiveRecord::Base
  validates :name, presence: true

  def self.search(search)
    Topic.where("name LIKE ? OR description LIKE ?", "%#{search}%", "%#{search}%").distinct
  end

  def as_json(options={})
    super(:only => [:id, :name, :description]
    )
  end
end
