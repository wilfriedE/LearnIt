class AddCreatorDetailsToLessonVersion < ActiveRecord::Migration[5.1]
  def change
    add_reference :lesson_versions, :creator, foreign_key: true
  end
end
