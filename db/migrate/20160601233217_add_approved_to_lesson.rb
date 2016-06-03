class AddApprovedToLesson < ActiveRecord::Migration
  def change
    add_column :lessons, :approved, :boolean
  end
end
