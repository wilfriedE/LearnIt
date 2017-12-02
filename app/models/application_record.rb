class ApplicationRecord < ActiveRecord::Base
  self.abstract_class = true

  def platform
    @platform ||= Platform.new
  end
end
