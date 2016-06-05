class AddColumnToCourseLessons < ActiveRecord::Migration
  def change
    add_column :course_lessons, :course_id, :integer
    add_column :course_lessons, :lesson_id, :integer
  end
end
