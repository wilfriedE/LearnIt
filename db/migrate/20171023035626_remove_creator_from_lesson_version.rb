class RemoveCreatorFromLessonVersion < ActiveRecord::Migration[5.1]
  def change
    remove_reference :lesson_versions, :creator, foreign_key: true
  end
end
