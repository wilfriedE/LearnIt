class NotificationsController < ApplicationController
  def index
    return not_found unless current_user.present?
    @notifications ||= current_user.notifications.page params[:page]
    @notifications.each { |n| n.seen! if n.unread? }

    respond_to do |format|
      format.html
      format.js
    end
  end

  def show
    @notification = Notification.find_by(id: params[:id])
    authorize @notification
    @notification.read! unless @notification.read?
    redirect_to @notification.source || root_url
  end
end
