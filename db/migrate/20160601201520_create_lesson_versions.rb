class CreateLessonVersions < ActiveRecord::Migration
  def change
    create_table :lesson_versions do |t|
      t.string :name
      t.text :description
      t.boolean :approved
      t.string :color
      t.references :lesson, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
