class CreateTracks < ActiveRecord::Migration
  def change
    create_table :tracks do |t|
      t.string :name
      t.text :description
      t.boolean :approved
      t.string :color

      t.timestamps null: false
    end
  end
end
