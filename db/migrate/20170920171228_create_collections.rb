class CreateCollections < ActiveRecord::Migration[5.1]
  def change
    create_table :collections do |t|
      t.string :name
      t.text :description
      t.integer :approval, default: 0
      t.references :creator, polymorphic: true

      t.timestamps
    end
  end
end
