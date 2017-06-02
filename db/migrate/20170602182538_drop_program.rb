class DropProgram < ActiveRecord::Migration[5.1]
  def change
    drop_table :programs
  end
end
