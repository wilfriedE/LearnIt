FactoryBot.define do
  factory :lesson_version do
    name "Learn Stuff"
    description "Learn how to do stuff."
    data "{\"url\":\"https://www.youtube.com/watch?v=miomuSGoPzI\"}"
    approval :awaiting_approval
    media_type 1
    association :creator, factory: :user
  end
end
