module Platform

  def self.platform_name
    PlatformPreference.create_with(preftype: PlatformPreference::PREFTYPES[:STRING],
     string_field: ENV['PLATFORM_NAME']).find_or_create_by(name: 'name').value
  end

  def self.preferences
    PlatformPreference.all.map { |pref| {pref.name => pref.value }  }
  end

end
