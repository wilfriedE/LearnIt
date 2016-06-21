class Program < ActiveRecord::Base
  has_many :curated_items, -> { distinct }
  accepts_nested_attributes_for :curated_items, :reject_if => :all_blank, :allow_destroy => true
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
