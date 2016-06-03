class LessonVersionsController < ApplicationController
  def show
  end

  def new
    @lesson_version = LessonVersion.new()
  end

  def edit
  end

  def create
    @lesson = Lesson.new()
    @lesson_version = LessonVersion.new(lesson_version_params)
    respond_to do |format|
      if @lesson_version.save
        @lesson.active_version =  @lesson_version
        @lesson.save
        @lesson_version.lesson = @lesson
        @lesson_version.save
        format.html { redirect_to @lesson_version, notice: 'Lesson was successfully created.' }
        format.json { render :show, status: :created, location: @lesson_version }
      else
        format.html { render :new }
        format.json { render json: @lesson.errors, status: :unprocessable_entity }
      end
    end
  end

  private
  def lesson_version_params
    #code
  end
end
