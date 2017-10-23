FactoryBot.define do
  factory :platform_preference do
    name "MyString"
    preftype PlatformPreference.preftypes[:string]
    string_field "String Field Value"
  end
end
