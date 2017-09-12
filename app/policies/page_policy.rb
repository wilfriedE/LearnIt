class PagePolicy < ApplicationPolicy
  def update?
    return false unless user
    user.editor? || user.admin?
  end

  def destroy?
    return false unless user
    user.admin?
  end
end
