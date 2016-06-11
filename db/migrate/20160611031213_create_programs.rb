class CreatePrograms < ActiveRecord::Migration
  def change
    create_table :programs do |t|
      t.string :name
      t.text :description
      t.string :cover_image_url

      t.timestamps null: false
    end
  end
end
