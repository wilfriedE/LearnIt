class PlatformPreference < ApplicationRecord
  PREFTYPES = { STRING: "String", TEXT: "Text", BOOL: "Boolean", INTERGER: "Integer",
                FLOAT: "Float", DECIMAL: "Decimal", DATETIME: "Datetime", TIMESTAMP: "Timestamp",
                TIME: "Time", DATE: "Date", BINARY: "Binary", REF: "Reference", RICH_TEXT: "Rich Text",
                UNKNOWN: "Unknown preference type" }.freeeze

  belongs_to :ref_field, polymorphic: true
  validates :name, presence: true, uniqueness: { case_sensitive: false, allow_blank: true }
  validates :preftype, presence: true

  def value
    case preftype
    when PREFTYPES[:STRING]
      string_field
    when PREFTYPES[:TEXT]
      text_field
    when PREFTYPES[:BOOL]
      bool_field
    when PREFTYPES[:INTERGER]
      integer_field
    when PREFTYPES[:FLOAT]
      float_field
    when PREFTYPES[:DECIMAL]
      decimal_field
    when PREFTYPES[:DATETIME]
      datetime_field
    when PREFTYPES[:TIMESTAMP]
      timestamp_field
    when PREFTYPES[:TIME]
      time_field
    when PREFTYPES[:DATE]
      date_field
    when PREFTYPES[:BINARY]
      binary_field
    when PREFTYPES[:REF]
      ref_field
    when PREFTYPES[:RICH_TEXT]
      rich_text_field
    else
      PREFTYPES[:UNKNOWN]
    end
  end
end
