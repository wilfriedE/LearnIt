class Moderate::TicketsController < ApplicationController
  before_action :authenticate_user!

  def index
    #if there is a search query, properly handle rendering them
    @alltickets_active = "active"
    if params[:q]
      @tickets = ModTicketActivity.search(params[:q]).order("created_at DESC")
    else
      limit = 10
      @tickets = ModTicketActivity.offset(params[:page].to_i * limit).first(limit)
    end
    respond_to do |format|
      format.html
      format.json { render json: @tickets }
    end
  end

  def show
    @alltickets_active = "active"
    @ticket = ModTicketActivity.find(params[:id])
  end

  def claim
    @ticket = ModTicketActivity.find(params[:id])
    @ticket.assign_to(current_user)
    redirect_to moderate_ticket_path
  end

  def unclaim
    @ticket = ModTicketActivity.find(params[:id])
    @ticket.unassign(current_user)
    redirect_to moderate_ticket_path
  end

  def subscribe
    @ticket = ModTicketActivity.find(params[:id])
    @ticket.subscribe(current_user)
    redirect_to moderate_ticket_path
  end

  def unsubscribe
    @ticket = ModTicketActivity.find(params[:id])
    @ticket.unsubscribe(current_user)
    redirect_to moderate_ticket_path
  end

  def assign_to
    @ticket = ModTicketActivity.find(params[:id])
    @ticket.assign_to(User.find(params[:user_id]))
    redirect_to moderate_ticket_path
  end

  def change_status
    @ticket = ModTicketActivity.find(params[:id])
    @ticket.status = params[:state]
    @ticket.save!
    redirect_to moderate_ticket_path
  end
end
