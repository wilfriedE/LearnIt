class CreateTrackCourses < ActiveRecord::Migration
  def change
    create_table :track_courses do |t|
      t.integer :position
      t.references :track, index: true, foreign_key: true
      t.references :course, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
