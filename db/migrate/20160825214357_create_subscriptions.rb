class CreateSubscriptions < ActiveRecord::Migration
  def change
    create_table :subscriptions do |t|
      t.references :subscription, polymorphic: true, index: true
      t.references :subscriber, polymorphic: true, index: true

      t.timestamps null: false
    end
  end
end
