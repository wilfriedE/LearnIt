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
      if @track.save && (@track.user_contributors += [current_user])
        new_track_activity(@track)
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
        if !@track.contributors.include?(current_user)
          @track.user_contributors += [current_user]
        end
        updated_track_activity(@track)
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

  def new_track_activity(track)
    ModTicketActivity.create_ticket("New Track: ##{track.id} available.",
     "#{track.name} was recently created awaiting approval",
      [track])
    UserFeedActivity.create_user_notification(current_user, "New Track: ##{track.id} submitted for approval.",
     "Thank you for contributing #{track.name}. It has been submitted for review by moderators.",
      [track])
  end

  def updated_track_activity(track)
    ModTicketActivity.create_ticket("Track: ##{track.id} updated.",
     "#{track.name} was recently updated by #{current_user.nickname}",
      [track])
    track.contributions.each do |contributor|
      UserFeedActivity.create_user_notification(contributor, "Track: ##{track.id} was recently updated.",
       "#{track.name}, has recently been updated.",
        [track])
    end
  end

end
