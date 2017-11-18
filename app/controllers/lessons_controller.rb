class LessonsController < ApplicationController
  include LessonVersionable
  include Notifiable

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
      notification_for_new_lesson(current_user, @lesson)
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
      notification_for_new_lesson_proposal(current_user, @lesson_version)
      redirect_to lesson_version_path(id: @lesson_version)
    else
      render "lesson_versions/new_version_proposal"
    end
  end

  ## Change lesson approval
  ##
  def lesson_approval
    @row_id = params[:row_id]
    @lesson = Lesson.find(params[:id])
    authorize @lesson, :moderate?
    return unless LessonVersion.approvals[params[:approval]] && @lesson.approval != params[:approval]
    @active_version = @lesson.active_version
    @active_version.update(lesson_id: @lesson.id, approval: params[:approval].to_sym)
    @lesson.lesson_subscribers.each { |subscriber| notification_for_lesson_approval_change(subscriber, @lesson) }
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
