class LessonsController < ApplicationController
  include LessonVersionable

  def index
    @lessons ||= Lesson.all
  end

  def show
    @lesson ||= Lesson.find(params[:id])
  end

  def new
    @lesson_version = LessonVersion.new
    authorize @lesson_version
  end

  def propose_update
    @lesson ||= Lesson.find(params[:id])
    @lesson_version = LessonVersion.new(lesson_id: @lesson.id)
    authorize @lesson_version, :create?
    render "lesson_versions/new_version_proposal"
  end

  def create
    @lesson_version = build_lesson_version
    if @lesson_version.save
      @lesson = Lesson.new(active_version_id: @lesson_version.id)
      @lesson.save
      redirect_to lesson_path(id: @lesson)
    else
      render "new"
    end
  end

  def create_new_version
    @lesson ||= Lesson.find(params[:id])
    @lesson_version = build_lesson_version
    @lesson_version.lesson_id = @lesson.id
    if @lesson_version.save
      redirect_to lesson_version_path(id: @lesson_version)
    else
      render "lesson_versions/new_version_proposal"
    end
  end
end
