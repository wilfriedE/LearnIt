class RemoveApprovedFromLessonVersion < ActiveRecord::Migration[5.1]
  def change
    remove_column :lesson_versions, :approved, :boolean
  end
end
