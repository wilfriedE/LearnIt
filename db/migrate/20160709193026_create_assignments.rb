class CreateAssignments < ActiveRecord::Migration
  def change
    create_table :assignments do |t|
      t.references :assignable, polymorphic: true, index: true
      t.references :claimer, polymorphic: true, index: true

      t.timestamps null: false
    end
  end
end
