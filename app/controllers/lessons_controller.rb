class LessonsController < ApplicationController
  def index
    #if there is a search query, properly handle rendering them
    if params[:q]
      @lessons = Lesson.search(params[:q]).order("created_at DESC")
    else
      limit = 10
      @lessons = Lesson.offset(params[:page].to_i * limit).first(limit)
    end
    respond_to do |format|
      format.html
      format.json { render json: @lessons }
    end
  end

  def show
    @course =  nil
    @lesson = Lesson.find(params[:id])
    @lesson_version = @lesson.active_version
    render :template => 'lesson_versions/show'
  end

  def new
    @lesson = nil
    @lesson_version = LessonVersion.new()
    @lesson_version.media = MediaContent.new()
    render :template => 'lesson_versions/new'
  end

  def edit
    @lesson = Lesson.find(params[:id])
    redirect_to propose_update_lesson_path(@lesson)
  end

  def propose_update
    @lesson = Lesson.find(params[:id])
    if @lesson
      @lesson_version = LessonVersion.new(@lesson.active_version.attributes.merge({:approved => false}))
      @lesson_version.media.id = nil
    end
    #create a new lesson version with new data
    render :template => 'lesson_versions/new'
  end

end
