class LessonPolicy < ApplicationPolicy
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
end
