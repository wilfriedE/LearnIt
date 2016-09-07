class GeneralFeedActivity < Activity
  include SingleTablePolymorphic
  include Subscribable
  include Outlet
end

=begin
When a user closes a general_Feed_activity notification or deletes it,
it only unsubscribes them.
Each subscription has a marked field to determine wether it is read or unread.
=end
