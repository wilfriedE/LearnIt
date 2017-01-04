class Contribution < ApplicationRecord
  belongs_to :contributor, polymorphic: true
  belongs_to :contribution, polymorphic: true
end
