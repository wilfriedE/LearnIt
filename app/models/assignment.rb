class Assignment < ApplicationRecord
  belongs_to :assignable, polymorphic: true
  belongs_to :claimer, polymorphic: true
  validates  :claimer_id, uniqueness: true, scope: %i[claimer_type assignable_type assignable_id]
end
