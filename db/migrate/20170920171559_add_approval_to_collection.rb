class AddApprovalToCollection < ActiveRecord::Migration[5.1]
  def change
    add_column :collections, :approval, :integer, default: 0
  end
end
