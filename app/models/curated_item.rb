class CuratedItem < ApplicationRecord
  belongs_to :program
  belongs_to :curatable, polymorphic: true
  default_scope { order('curatable_type ASC') }
end
