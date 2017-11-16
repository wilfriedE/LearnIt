class CreateLessons < ActiveRecord::Migration[5.1]
  def change
    create_table :lessons do |t|
      t.integer :active_version_id

      t.timestamps
    end
    add_foreign_key :lessons, :lesson_versions, column: :active_version_id
    add_index :lessons, :active_version_id
  end
end
