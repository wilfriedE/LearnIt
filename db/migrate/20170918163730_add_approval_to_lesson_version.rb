class AddApprovalToLessonVersion < ActiveRecord::Migration[5.1]
  def change
    add_column :lesson_versions, :approval, :integer, default: 0
  end
end
