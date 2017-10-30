class CreateLessons < ActiveRecord::Migration[5.1]
  def change
    create_table :lessons do |t|
      t.references :active_version, foreign_key: true

      t.timestamps
    end
  end
end
