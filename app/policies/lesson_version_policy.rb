class LessonVersionPolicy < ApplicationPolicy
  def show?
    record.approved? || can_modify?
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

  def moderate?
    return false unless user
    user.moderator?
  end

  private

  def can_modify?
    return false unless user
    user.moderator? || (record.creator.id == user.id && !record.approved?)
  end
end
