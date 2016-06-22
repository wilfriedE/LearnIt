class CreateTeams < ActiveRecord::Migration
  def change
    create_table :teams do |t|
      t.string :name
      t.integer :number, index: true
      t.string :email
      t.string :website
      t.string :moto
      t.references :program, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
