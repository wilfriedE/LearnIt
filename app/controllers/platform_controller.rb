class PlatformController < ApplicationController
  before_action :verify_access, except: [:pages]

  def index; end

  def preferences
    @preferences ||= PlatformPreference.all
  end

  def pages
    authorize Page.new, :create?
    @pages ||= Page.all
  end

  private

  def verify_access
    authorize :administrate, :access?
  end
end
