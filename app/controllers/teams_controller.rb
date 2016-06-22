class TeamsController < ApplicationController
  def index
    if params[:q]
      @teams = Team.search(params[:q]).order("created_at DESC")
    else
      limit = 10
      @teams = Team.offset(params[:page].to_i * limit ).first(limit)
    end
    respond_to do |format|
      format.html
      format.json { render json: @teams }
    end
  end

  def show
    @team = Team.find(params[:id])
  end
end
