FactoryBot.define do
  factory :notification do
    sequence(:name) { |n| "notification_#{n}" }
    description "a notification"
    association :recipient, factory: :user
  end
end
