class Moderate::ModerationsController < ApplicationController
  before_action :authenticate_user!

  def dashboard
    @dashboard_active = "active"
    @tickets = ModTicketActivity.last(10)
  end

  def mytickets
    @mytickets_active = "active"
    @mytickets = current_user.tickets
  end

  def guides
    @guides_active = "active"
  end

end
