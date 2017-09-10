class PlatformController < ApplicationController
  before_action :verify_access

  def index; end

  def preferences
    @preferences ||= PlatformPreference.all
  end

  private

  def verify_access
    authorize :administrate, :access?
  end
end
