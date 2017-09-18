class LessonPolicy < ApplicationPolicy
  def show?
    record.active_version.approved? || (user && can_modify?)
  end

  def update?
    return false unless user
    user.admin? || user.moderator?
  end

  def destroy?
    return false unless user
    user.admin? || user.moderator?
  end

  def create?
    return false unless user
    !user.banned?
  end

  private

  def can_modify?
    active_version = record.active_version
    (user.admin? || user.moderator? || active_version.creator.id == user.id)
  end
end
