class PlatformPreference < ApplicationRecord
  belongs_to :ref_field, polymorphic: true
  validates :name, presence: true, uniqueness: { case_sensitive: false, allow_blank: true }
  validates :preftype, presence: true

  enum preftype: { string: 0, text: 1, rich_text: 2, bool: 3, integer: 4, float: 5, decimal: 6,
                   date: 7, datetime: 8, timestamp: 9, time: 10 }

  def value
    send(:"#{preftype}_field")
  end

  def default?
    Platform::REQUIRED_PREFERENCES.include? name.to_sym
  end
end
