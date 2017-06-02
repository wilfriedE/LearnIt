class RemoveProgramFromTeam < ActiveRecord::Migration[5.1]
  def change
    remove_column :teams, :program, :references
  end
end
