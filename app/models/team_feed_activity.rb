class TeamFeedActivity < ApplicationRecord
  include SingleTablePolymorphic
  include Subscribable
  include Outlet

end
