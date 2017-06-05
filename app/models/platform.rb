require 'singleton'
class Platform
  include Singleton

  attr_reader :name, :footer, :description

  def initialize()
    @name = PlatformPreference.create_with(preftype: PlatformPreference::PREFTYPES[:STRING],
     string_field: ENV['PLATFORM_NAME']).find_or_create_by(name: 'name').value
    @footer = PlatformPreference.create_with(preftype: PlatformPreference::PREFTYPES[:RICH_TEXT],
     rich_text_field: ENV['PLATFORM_FOOTER']).find_or_create_by(name: 'footer').value
  end

  def preferences
    PlatformPreference.all.map { |pref| {pref.name => pref.value }  }
  end

  def all_contributor?
    PlatformPreference.create_with(preftype: PlatformPreference::PREFTYPES[:BOOL],
     bool_field: true).find_or_create_by(name: 'all_contributor').value
  end
end
