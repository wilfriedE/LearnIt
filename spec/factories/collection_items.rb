FactoryBot.define do
  factory :collection_item do
    sequence(:position)
    association :collection, factory: :collection
    association :collectible, factory: :lesson
  end
end
