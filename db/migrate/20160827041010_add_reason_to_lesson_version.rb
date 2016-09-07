class AddReasonToLessonVersion < ActiveRecord::Migration
  def change
    add_column :lesson_versions, :reason, :text
  end
end
