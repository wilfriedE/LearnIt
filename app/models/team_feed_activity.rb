class TeamFeedActivity < Activity
  include SingleTablePolymorphic
  include Subscribable
  include Outlet

end
