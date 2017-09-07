module Platform
  REQUIRED_PREFERENCES = %i[brand description].freeze

  def self.brand
    @brand ||= PlatformPreference.create_with(preftype: PlatformPreference::PREFTYPES[:STRING], string_field: "LearnIt")
                                 .find_or_create_by(name: 'brand').value
  end

  def self.description
    @description ||= PlatformPreference.create_with(preftype: PlatformPreference::PREFTYPES[:RICH_TEXT],
                                                    rich_text_field: "A centralized collection of resource for the your learning needs.")
                                       .find_or_create_by(name: 'description').value
  end

  class << self
    @preferences ||= PlatformPreference.all
    @preferences.each do |preference|
      define_method(:"#{preference.name}") { preference.value }
      define_method(:"#{preference.name}?") { preference.value } if preference.bool_field
    end
  end
end
