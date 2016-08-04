module ProfileHelper
  def user_card(user)
    render partial: "profile/card", locals: { user: user }
  end
end
