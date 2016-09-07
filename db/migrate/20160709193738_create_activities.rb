class CreateActivities < ActiveRecord::Migration
  def change
    create_table :activities do |t|
      t.string :type
      t.string :name
      t.text :description

      t.timestamps null: false
    end
  end
end
