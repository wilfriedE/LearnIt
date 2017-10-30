FactoryBot.define do
  factory :user do
    first_name "Bob"
    last_name  "Firebird"
    sequence(:nickname) { |n| "nick_#{n}" }
    sequence(:email) { |n| "person_#{n}@example.com" }
    password "password"
    password_confirmation "password"
  end
end
