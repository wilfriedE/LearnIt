class CreateCourseLessons < ActiveRecord::Migration
  def change
    create_table :course_lessons do |t|
      t.integer :position

      t.timestamps null: false
    end
  end
end
