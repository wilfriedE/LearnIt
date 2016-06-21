class CreateCuratedItems < ActiveRecord::Migration
  def change
    create_table :curated_items do |t|
      t.references :program, index: true, foreign_key: true
      t.references :curatable, polymorphic: true, index: true

      t.timestamps null: false
    end
  end
end
