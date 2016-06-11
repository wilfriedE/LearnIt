class TopicItem < ActiveRecord::Base
  belongs_to :topic
  belongs_to :topicable, polymorphic: true
  accepts_nested_attributes_for :topic
end
