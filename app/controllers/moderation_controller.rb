class ModerationController < ApplicationController
  before_action :can_moderate?

  def index
    @active = params[:active] || :new_lessons
    @active = @active.to_sym
    @q      = Lesson.search(query_params) if [:new_lessons, :list_lessons].include? @active
    @q      = LessonVersion.search(query_params) if [:new_lesson_versions, :list_lesson_versions].include? @active
    @q      = Collection.search(query_params) if [:new_collections, :list_collections].include? @active
    result  = @q.result(distinct: true)
    new_record = [:new_lessons, :new_lesson_versions, :new_collections].include? @active
    @records = result.page(params[:page]) unless new_record
    @records = Kaminari.paginate_array(result.select(&:awaiting_approval?)).page(params[:page]) if new_record
  end

  private

  def query_params
    params.require(:q).permit! if params[:q]
  end

  def can_moderate?
    not_found unless current_user && (current_user.moderator? || current_user.admin?)
  end
end
