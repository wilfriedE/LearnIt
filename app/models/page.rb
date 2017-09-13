class Page < ApplicationRecord
  validates :name,  uniqueness: true, presence: true
  validates :title, presence: true


  def default?
    Platform::REQUIRED_PAGES.include? name.to_sym
  end
end
