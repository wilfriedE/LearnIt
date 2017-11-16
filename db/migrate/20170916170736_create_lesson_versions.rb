class CreateLessonVersions < ActiveRecord::Migration[5.1]
  def change
    create_table :lesson_versions do |t|
      t.text :data
      t.integer :approval, default: 0
      t.integer :media_type
      t.references :creator, polymorphic: true

      t.timestamps
    end
  end
end
