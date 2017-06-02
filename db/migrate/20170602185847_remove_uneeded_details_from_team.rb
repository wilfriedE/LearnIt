class RemoveUneededDetailsFromTeam < ActiveRecord::Migration[5.1]
  def change
    remove_reference :teams, :program, foreign_key: true
    remove_column :teams, :moto, :string
    remove_column :teams, :email, :string
    remove_column :teams, :number, :integer
  end
end
