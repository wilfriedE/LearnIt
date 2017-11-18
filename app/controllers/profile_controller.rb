class ProfileController < ApplicationController
  before_action :authenticate_user!
  def page
    @user = current_user
  end
end
