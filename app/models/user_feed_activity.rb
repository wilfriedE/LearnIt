class UserFeedActivity < Activity
  include SingleTablePolymorphic
  include Subscribable
  include Outlet

  def self.create_user_notification(user, name, description, contents=[], media=[])
    notification = UserFeedActivity.create(name:name, description: description)
    contents.each { |content|
      notification.media_outlets += [MediaOutlet.new(content: content)]
    }
    notification.media_contents += media
    notification.subscribe(user)
  end
end
