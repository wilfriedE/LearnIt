class TopicsController < ApplicationController
  def index
    #if there is a search query, properly handle rendering them
    if params[:q]
      @topics = Topic.search(params[:q]).order("created_at DESC")
    else
      limit = 10
      @topics = Topic.offset(params[:page].to_i * limit).first(limit)
    end
    respond_to do |format|
      format.html
      format.json { render json: @topics }
    end
  end

  def show
    @topic = Topic.find(params[:id])
  end
end
