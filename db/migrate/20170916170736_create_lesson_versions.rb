class CreateLessonVersions < ActiveRecord::Migration[5.1]
  def change
    create_table :lesson_versions do |t|
      t.text :data
      t.boolean :approved, default: false
      t.integer :media_type

      t.timestamps
    end
  end
end
