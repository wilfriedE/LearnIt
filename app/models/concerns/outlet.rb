module Outlet
  extend ActiveSupport::Concern

  included do
    has_many :media_outlets, as: :outlet, dependent: :destroy
    has_many :media_contents, through: :media_outlets
  end

  def contents
    return self.media_outlets.map { |outlet| outlet.content  }.uniq
  end

end
