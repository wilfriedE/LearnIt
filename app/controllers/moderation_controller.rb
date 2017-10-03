class ModerationController < ApplicationController
  before_action :can_moderate?

  def index
    @active = params[:active] || "lesson"
    @new_lessons ||= Lesson.all.select { |lesson| lesson.approval.to_sym == :awaiting_approval }
    @lessons ||= Lesson.order(updated_at: :desc).first(10)
    @new_lesson_versions ||= LessonVersion.order(created_at: :desc).where.not(lesson_id: nil).select(&:awaiting_approval?).first(10)
    @lesson_versions ||= LessonVersion.order(created_at: :desc).where.not(lesson_id: nil).first(10)
    @new_collections ||= Collection.all.select { |collection| collection.approval.to_sym == :awaiting_approval }
    @collections ||= Collection.order(updated_at: :desc).first(10)
  end

  private

  def can_moderate?
    not_found unless current_user && (current_user.moderator? || current_user.admin?)
  end
end
