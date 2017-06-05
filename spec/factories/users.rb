FactoryGirl.define do
  factory :user do
    first_name "Bob"
    last_name  "Firebird"
    sequence(:nickname ) { |n| "nick#{n}"}
    sequence(:email) { |n| "person#{n}@example.com" }
    password "password"
    password_confirmation "password"
  end
end
