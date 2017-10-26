class LessonPolicy < ApplicationPolicy
  def show?
    record.active_version.approved? || can_modify?
  end

  def update?
    can_modify?
  end

  def destroy?
    can_modify?
  end

  def create?
    return false unless user
    user.contributor?
  end

  private

  def can_modify?
    return false unless user
    user.moderator? || (record.active_version.creator.id == user.id && !record.active_version.approved?)
  end
end
