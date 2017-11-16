class NotificationsController < ApplicationController
  def index
    @notifications ||= current_user.notifications.page params[:page]
    @notifications.each { |n| n.read! if n.unread? }

    respond_to do |format|
      format.html
      format.js
     end
  end

  def show
    @notification = Notification.find_by(id: params[:id], recipient: params[:user_id])
    authorize @notification
    @notification.read! if @notification.unread?
  end
end
