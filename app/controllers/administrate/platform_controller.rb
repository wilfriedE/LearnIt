class Administrate::PlatformController < ApplicationController
  before_action :verify_access

  def index
  end

  private
  def verify_access
    authorize :administrate, :access?
  end
end
