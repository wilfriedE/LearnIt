class TopicItem < ApplicationRecord
  belongs_to :topic, autosave: true
  belongs_to :topicable, polymorphic: true
  accepts_nested_attributes_for :topic
  before_validation :check_for_existing_topic

  def check_for_existing_topic
    # Find or create the topic by name
    if new_topic == Topic.find(name: topic.name)
      topic = new_topic
    else
      topic.save!
    end
  end
end
