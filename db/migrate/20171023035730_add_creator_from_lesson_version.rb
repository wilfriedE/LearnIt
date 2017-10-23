class AddCreatorFromLessonVersion < ActiveRecord::Migration[5.1]
  def change
    add_reference :lesson_versions, :creator, polymorphic: true
  end
end
