class NotificationPolicy < ApplicationPolicy
  def show?
    return false unless user
    record.recipient == user
  end
end
