class CreateCollections < ActiveRecord::Migration[5.1]
  def change
    create_table :collections do |t|
      t.string :name
      t.text :description
      t.references :creator, foreign_key: true

      t.timestamps
    end
  end
end
