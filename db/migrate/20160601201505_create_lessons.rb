class CreateLessons < ActiveRecord::Migration
  def change
    create_table :lessons do |t|
      t.references :active_version, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
