FactoryBot.define do
  factory :platform_preference do
    sequence(:name) { |n| "preference_#{n}" }
    preftype PlatformPreference.preftypes[:string]
    string_field "String Field Value"
  end
end
