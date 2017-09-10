class Platform
  REQUIRED_PREFERENCES = %i[brand description configured].freeze

  def method_missing(method_name, *arguments, &block)
    preference = PlatformPreference.find_by(name: method_name.to_s)
    if preference
      define_singleton_method(:"#{preference.name.downcase}") { preference.value }
      define_singleton_method(:"#{preference.name.downcase}?") { preference.value } if preference.bool?
      preference.value
    else
      super
    end
  end

  def respond_to_missing?(method_name, include_private = false)
    PlatformPreference.find_by(name: method_name.to_s) || super
  end
end
