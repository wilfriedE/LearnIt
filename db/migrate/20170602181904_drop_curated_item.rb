class DropCuratedItem < ActiveRecord::Migration[5.1]
  def change
    drop_table :curated_items
  end
end
