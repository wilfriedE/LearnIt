class Platform
  REQUIRED_PREFERENCES = %i[brand description configured menus contributors_by_default].freeze
  REQUIRED_PAGES       = %i[home].freeze

  def menus
    @menu_list ||= PlatformPreference.find_by(name: "menus").value.split(",").map(&:strip)
    @menu_list.map { |menu| { name: menu, title: Page.find_by(name: menu).title } }
  end

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
