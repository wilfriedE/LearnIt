class ModerationController < ApplicationController
  before_action :can_moderate?

  def index
    @new_lessons ||= Lesson.all { |lesson| lesson if lesson.approval == :awaiting_approval }
    @lessons = Lesson.order(:updated_at).first(10)
  end

  private

  def can_moderate?
    not_found unless current_user && (current_user.moderator? || current_user.admin?)
  end
end
