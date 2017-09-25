class CollectionPolicy < ApplicationPolicy
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
    (user.admin? || user.moderator? || record.creator.id == user.id) && !record.approved?
  end
end
