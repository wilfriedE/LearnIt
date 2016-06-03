class AddMediaToLessonVersion < ActiveRecord::Migration
  def change
    add_reference :lesson_versions, :media, index: true, foreign_key: true
  end
end
