FactoryBot.define do
  factory :lesson do
    active_version { create :lesson_version }
  end
end
