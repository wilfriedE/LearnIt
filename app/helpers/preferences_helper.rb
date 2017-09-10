module PreferencesHelper
  def load_preftype_field(preftype, value_field_name, default_value = nil)
    case preftype
    when :string
      text_field :platform_preference, :"#{value_field_name}", { value: default_value, class: "form-control #{preftype} optional" }
    when :text
      text_area_tag :platform_preference, :"#{value_field_name}", { value: default_value, class: "form-control #{preftype} optional" }
    when :rich_text
      text_area_tag :platform_preference, :"#{value_field_name}", { value: default_value, class: "form-control #{preftype} optional" }
    when :bool
      select :platform_preference, :"#{value_field_name}", [['True', true], ['False', false]], {}, { value: default_value, class: "form-control #{preftype} optional" }
    when :integer
      number_field :platform_preference, :"#{value_field_name}", { value: default_value, class: "form-control #{preftype} optional" }
    when :float, :decimal
      number_field :platform_preference, :"#{value_field_name}", step: :any, value: default_value, class: "form-control #{preftype} optional"
    when :date
      date_field :platform_preference, :"#{value_field_name}", { value: default_value, class: "form-control #{preftype} optional" }
    when :datetime, :timestamp
      datetime_select :platform_preference, :"#{value_field_name}", { value: default_value, class: "form-control #{preftype} optional" }
    when :time
      time_field :platform_preference, :"#{value_field_name}", { value: default_value, class: "form-control #{preftype} optional" }
    end
  end
end
