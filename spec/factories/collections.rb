FactoryBot.define do
  factory :collection do
    name "A collection"
    description "A collection of items"
    association :creator, factory: :user
  end
end
