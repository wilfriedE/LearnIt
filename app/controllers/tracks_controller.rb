class TracksController < ApplicationController
  before_action :authenticate_user!, except: [:index, :show, :viewing]

  def index
    #if there is a search query, properly handle rendering them
    if params[:q]
      @tracks = Track.search(params[:q]).order("created_at DESC")
    else
      limit = 10
      @tracks = Track.offset(params[:page].to_i * limit ).first(limit)
    end
    respond_to do |format|
      format.html
      format.json { render json: @tracks }
    end
  end

  def show
    @track = Track.find(params[:id])
  end

  def new
    @track = Track.new()
  end

  def edit
    @track = Track.find(params[:id])
  end

  def viewing
    @track = Track.find(params[:id])
    @track_courses = @track.track_courses.find_by_position(params[:position])
    @course =  @track_courses.course
    render :template => 'courses/show'
  end

  def create
    @track = Track.new(track_params)
    respond_to do |format|
      if @track.save
        format.html { redirect_to @track, notice: 'Track was successfully created.' }
        format.json { render :show, status: :created, location: @track }
      else
        format.html { render :new }
        format.json { render json: @track.errors, status: :unprocessable_entity }
      end
    end
  end

  def update
    @track = Track.find(params[:id])
    @track.topic_items = @track.topic_items.each { |topic_item|
      TopicItem.new(topic_item.attributes.merge({topicable_id: nil}))}
    respond_to do |format|
      if @track.update_attributes(track_params)
        format.html { redirect_to @track, notice: 'Track was successfully update.' }
        format.json { render :show, status: :updated, location: @track }
      else
        format.html { render :new }
        format.json { render json: @track.errors, status: :unprocessable_entity }
      end
    end
  end

  private
  def track_params
    params.require(:track).permit(:name, :description,
        :track_courses_attributes => [:id, :_destroy, :position, :course_id],
        :topic_items_attributes => [:id, :_destroy, :topic_id,
          :topic_attributes => [:id, :name]])
  end
end
