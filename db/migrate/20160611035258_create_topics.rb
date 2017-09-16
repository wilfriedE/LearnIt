class CreateTopics < ActiveRecord::Migration[4.2]
  def change
    create_table :topics do |t|
      t.string :name
      t.text :description
      t.string :color
      t.boolean :approved
      t.string :cover_image_url

      t.timestamps null: false
    end
  end
end
