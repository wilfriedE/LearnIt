class LessonVersionPolicy < ApplicationPolicy
  def show?
    record.approved? || (user && can_modify?)
  end

  def update?
    return false unless user
    can_modify?
  end

  def destroy?
    return false unless user
    can_modify?
  end

  def create?
    return false unless user
    !user.banned?
  end

  private

  def can_modify?
    active_version = record.lesson.active_version
    (user.admin? || user.moderator? || record.creator.id == user.id) && (active_version.id != record.id)
  end
end
