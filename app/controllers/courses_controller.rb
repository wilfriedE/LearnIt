class CoursesController < ApplicationController
  def index
    limit = 10
    @courses = Course.offset(params[:page].to_i * limit ).first(limit)
  end

  def show
    @course = Course.find(params[:id])
  end

  def new
    @course = Course.new()
  end

  def edit
    @course = Course.find(params[:id])
    #only those granted permission to edit a course should be able to edit them.
  end

  def viewing
    @course = Course.find(params[:id])
    @course_lesson = @course.course_lessons.find_by_position(params[:position])
    @lesson =  @course_lesson.lesson
    @lesson_version = @lesson.active_version
    render :template => 'lesson_versions/show'
  end


end
