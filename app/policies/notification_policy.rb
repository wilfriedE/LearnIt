class NotificationPolicy < ApplicationPolicy
  def show?
    record.recipient == user
  end
end
