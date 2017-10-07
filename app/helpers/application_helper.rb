module ApplicationHelper
  def platform
    @platform ||= Platform.new
  end
end
