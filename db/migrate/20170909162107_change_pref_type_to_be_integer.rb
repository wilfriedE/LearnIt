class ChangePrefTypeToBeInteger < ActiveRecord::Migration[5.1]
  def change
    change_column :platform_preferences, :preftype, :integer, default: 0, null: false
  end
end
