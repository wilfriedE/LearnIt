class AddLessonDetailsToLessonVersion < ActiveRecord::Migration[5.1]
  def change
    add_column :lesson_versions, :name, :string
    add_column :lesson_versions, :description, :text
    add_column :lesson_versions, :lesson_id, :integer
  end
end
