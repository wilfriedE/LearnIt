class CreateCollectionItems < ActiveRecord::Migration[5.1]
  def change
    create_table :collection_items do |t|
      t.integer :position
      t.references :collection, foreign_key: true
      t.references :collectible, polymorphic: true

      t.timestamps
    end
  end
end
