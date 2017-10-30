FactoryBot.define do
  factory :page do
    sequence(:name) { |n| "page_#{n}" }
    title "MyString"
    body "MyText"
  end
end
