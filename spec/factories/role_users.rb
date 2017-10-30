FactoryBot.define do
  factory :role_user do
    association :role, factory: :role
    association :user, factory: :user
  end
end
