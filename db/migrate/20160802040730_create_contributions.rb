class CreateContributions < ActiveRecord::Migration
  def change
    create_table :contributions do |t|
      t.references :contributor, polymorphic: true, index: true
      t.references :contribution, polymorphic: true, index: true

      t.timestamps null: false
    end
  end
end
