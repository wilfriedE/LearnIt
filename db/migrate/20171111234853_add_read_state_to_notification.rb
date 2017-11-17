class AddReadStateToNotification < ActiveRecord::Migration[5.1]
  def change
    add_column :notifications, :read_status, :integer, default: 0
  end
end
