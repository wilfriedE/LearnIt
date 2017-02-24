FactoryGirl.define do
  factory :user do
    first_name "Bob"
    last_name  "Firebird"
    sequence(:nickname ) { |n| "nick#{n}"}
    sequence(:email) { |n| "person#{n}@example.com" }
    password "password"
    role "USER"

    trait :moderator do
      role "MOD"
    end

    trait :admin do
      role "ADMIN"
    end
  end
end
