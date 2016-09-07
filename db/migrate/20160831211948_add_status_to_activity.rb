class AddStatusToActivity < ActiveRecord::Migration
  def change
    add_column :activities, :status, :string
  end
end
