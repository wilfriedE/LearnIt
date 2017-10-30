class ModerationController < ApplicationController
  before_action :can_moderate?

  def index
    @active  = params[:active] || :new_lessons
    @active  = @active.to_sym
    @q       = Lesson.search(query_params(@active)) if [:new_lessons, :list_lessons].include? @active
    @q       = LessonVersion.search(query_params(@active)) if [:new_lesson_versions, :list_lesson_versions].include? @active
    @q       = Collection.search(query_params(@active)) if [:new_collections, :list_collections].include? @active
    @records = @q.result(distinct: true).page(params[:page])
  end

  private

  def query_params(active)
    return unless params[:q]
    q_params = params.require(:q)
    q_params.merge(active_version_approval_eq: LessonVersion.approvals[:awaiting_approval]) if :new_lessons == active
    q_params.merge(approval_eq: LessonVersion.approvals[:awaiting_approval]) if :new_lesson_versions == active
    q_params.merge(approval_eq: Collection.approvals[:awaiting_approval]) if :new_collections == active
    q_params.permit!
  end

  def can_moderate?
    not_found unless current_user && (current_user.moderator? || current_user.admin?)
  end
end
