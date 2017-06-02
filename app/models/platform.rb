require 'singleton'
class Platform
  include Singleton

  attr_reader :name

  def initialize()
    @name = PlatformPreference.create_with(preftype: PlatformPreference::PREFTYPES[:STRING],
     string_field: ENV['PLATFORM_NAME']).find_or_create_by(name: 'name').value
    @footer = PlatformPreference.create_with(preftype: PlatformPreference::PREFTYPES[:RICH_TEXT],
     rich_text_field: ENV['PLATFORM_FOOTER']).find_or_create_by(name: 'footer').value
  end

  def platform_name
  end

  def footer
    @footer
  end

  def preferences
    PlatformPreference.all.map { |pref| {pref.name => pref.value }  }
  end

end
