module ProfileHelper
  def user_card(user)
    render partial: "profile/card", locals: { user: user }
  end

  def notification_card(notification)
    render partial: "profile/notification_card", locals: { notification: notification }
  end
end
