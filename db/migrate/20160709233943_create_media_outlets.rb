class CreateMediaOutlets < ActiveRecord::Migration
  def change
    create_table :media_outlets do |t|
      t.references :media_content, index: true, foreign_key: true
      t.references :outlet, polymorphic: true, index: true

      t.timestamps null: false
    end
  end
end
