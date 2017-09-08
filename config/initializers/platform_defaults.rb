module Platform
  REQUIRED_PREFERENCES = %i[brand description configured].freeze

  class << self
    @preferences ||= PlatformPreference.all
    @preferences.each do |preference|
      define_method(:"#{preference.name}") { preference.value }
      define_method(:"#{preference.name}?") { preference.value } if preference.preftype == PlatformPreference::PREFTYPES[:BOOL]
    end
  end
end
