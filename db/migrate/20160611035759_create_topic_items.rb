class CreateTopicItems < ActiveRecord::Migration
  def change
    create_table :topic_items do |t|
      t.references :topic, index: true, foreign_key: true
      t.references :topicable, polymorphic: true, index: true

      t.timestamps null: false
    end
  end
end
