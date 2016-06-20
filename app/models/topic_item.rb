class TopicItem < ActiveRecord::Base
  belongs_to :topic, :autosave => true
  belongs_to :topicable, polymorphic: true
  accepts_nested_attributes_for :topic
  before_validation :check_for_existing_topic

  def check_for_existing_topic
    # Find or create the topic by name
    if new_topic = Topic.find_by_name(topic.name)
      self.topic = new_topic
    else
      self.topic.save!
    end
    Rails.logger.debug topic.inspect
  end
end
