FactoryGirl.define do
  factory :role do
    description "MyText"

    trait :contributor do
      name "contributor"
    end
    trait :moderator do
      name "moderator"
    end
    trait :editor do
      name "editor"
    end
    trait :admin do
      name "admin"
    end
  end
end
