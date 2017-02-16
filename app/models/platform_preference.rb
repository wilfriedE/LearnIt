class PlatformPreference < ApplicationRecord
  PREFTYPES = { STRING: "String",  TEXT: "Text", BOOL: "Boolean", INTERGER: "Integer",
                FLOAT: "Float", DECIMAL: "Decimal", DATETIME: "Datetime", TIMESTAMP: "Timestamp",
                TIME: "Time", DATE: "Date", BINARY: "Binary", REF: "Reference",
                UNKNOWN: "Unknown preference type"}

  belongs_to :ref_field, polymorphic: true
  validates :name, presence: true, uniqueness: true
  validates :preftype, presence: true

  def value
    case preftype
    when PREFTYPES[:STRING]
      return string_field
    when PREFTYPES[:TEXT]
      return text_field
    when PREFTYPES[:BOOL]
      return bool_field
    when PREFTYPES[:INTERGER]
      return integer_field
    when PREFTYPES[:FLOAT]
      return float_field
    when PREFTYPES[:DECIMAL]
      return decimal_field
    when PREFTYPES[:DATETIME]
      return datetime_field
    when PREFTYPES[:TIMESTAMP]
      return timestamp_field
    when PREFTYPES[:TIME]
      return time_field
    when PREFTYPES[:DATE]
      return date_field
    when PREFTYPES[:BINARY]
      return binary_field
    when PREFTYPES[:REF]
      return ref_field
    else
      return PREFTYPES[:UNKNOWN]
    end
  end
end
