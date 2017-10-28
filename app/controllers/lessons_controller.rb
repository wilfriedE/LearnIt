class LessonsController < ApplicationController
  include LessonVersionable

  def index
    @q = Lesson.search(query_params)
    @lessons ||= @q.result(distinct: true).page params[:page]
  end

  def show
    @lesson ||= Lesson.find(params[:id])
    authorize @lesson
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
    authorize Lesson.new
    @lesson_version = LessonVersion.new(build_lesson_version.merge(creator: current_user))
    if @lesson_version.save
      @lesson = Lesson.new(active_version_id: @lesson_version.id)
      @lesson_version.update(lesson: @lesson)
      @lesson.save
      redirect_to lesson_path(id: @lesson)
    else
      render "new"
    end
  end

  def create_new_version
    @lesson ||= Lesson.find(params[:id])
    authorize LessonVersion.new, :create?
    @lesson_version = LessonVersion.new(build_lesson_version.merge(creator: current_user))
    @lesson_version.lesson_id = @lesson.id
    if @lesson_version.save
      redirect_to lesson_version_path(id: @lesson_version)
    else
      render "lesson_versions/new_version_proposal"
    end
  end

  def lesson_approval
    @row_id = params[:row_id]
    @lesson = Lesson.find(params[:id])
    authorize @lesson, :moderate?
    @active_version = @lesson.active_version
    @active_version.update(lesson_id: @lesson.id, approval: params[:approval].to_sym) if LessonVersion.approvals[params[:approval]]
    respond_to :js
  end

  def destroy
    @row_id = params[:row_id]
    @lesson = Lesson.find(params[:id])
    authorize @lesson
    @lesson.destroy
    respond_to :js
  end

  private

  def query_params
    return { active_version_approval_eq: LessonVersion.approvals[:approved] } unless params[:q]
    params.require(:q).merge(active_version_approval_eq: LessonVersion.approvals[:approved]).permit!
  end
end
