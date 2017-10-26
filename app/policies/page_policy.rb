class PagePolicy < ApplicationPolicy
  def update?
    can_modify?
  end

  def destroy?
    can_modify?
  end

  def create?
    can_modify?
  end

  private

  def can_modify?
    return false unless user
    user.editor? || user.admin?
  end
end
