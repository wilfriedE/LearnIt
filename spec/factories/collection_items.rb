FactoryBot.define do
  factory :collection_item do
    sequence(:position)
    collection
    association :collectible, factory: :lesson
  end
end
