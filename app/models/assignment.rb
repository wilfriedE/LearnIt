class Assignment < ActiveRecord::Base
  belongs_to :assignable, polymorphic: true
  belongs_to :claimer, polymorphic: true
  validates_uniqueness_of :claimer_id, :scope => [:claimer_type, :assignable_type, :assignable_id]

end
