module Assignable
  extend ActiveSupport::Concern

  included do
    has_one :assignment, as: :assignable, dependent: :destroy
    has_one :claimer, through: :assignment, source_type: "User"
  end

  def assign_to(user)
    #change to support various claimer type if available
    if !(self.claimer && self.claimer.id  == user.id)
      self.claimer = User.find(user.id)
    end
  end

  def unassign(user)
    self.assignment.destroy!
  end

  def re_assign_to(user)
    if self.claimer && self.claimer != user
      #notify the old claimer that the assignment has been switched to a different user
    end

      self.assign_to(user)
  end

  def owner
    self.claimer
  end

end
