class Platform
  REQUIRED_PREFERENCES = %i[brand description configured menus contributors_by_default].freeze
  REQUIRED_PAGES       = %i[home].freeze

  def menus
    @menu_list ||= PlatformPreference.find_by(name: "menus").value.split(",").map(&:strip)
    @menu_list.map { |menu| { name: menu, title: Page.find_by(name: menu).title } }
  end

  def pref(name)
    preference = PlatformPreference.find_by(name: name.to_s)
    return preference.value if preference
  end
end
