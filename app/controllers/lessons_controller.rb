class LessonsController < ApplicationController
  def index
    @lessons = Lesson.offset(params[:page].to_i).first(10)
  end

  def show
    @lesson = Lesson.find(params[:id])
  end

  def propose_update
    @lesson = Lesson.find(params[:id])
    if @lesson
      @lesson_version = LessonVersion.new(@lesson.active_version.attributes.merge({:approved => false}))
    end
    #create a new lesson version with new data
    render :template => 'lesson_versions/new'
  end

end
