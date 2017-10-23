FactoryBot.define do
  factory :role do
    name "contributor"
    description "This role indicates that the individual is a contributor"

    trait :contributor do
      name "contributor"
      description "This role indicates that the individual is a contributor"
    end

    trait :moderator do
      name "moderator"
      description "This role indicates that the individual is a moderator"
    end
    trait :editor do
      name "editor"
      description "This role indicates that the individual is an editor"
    end
    trait :admin do
      name "admin"
      description "This role indicates that the individual is an administrator"
    end
  end
end
