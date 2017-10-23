class RemoveCreatorFromCollection < ActiveRecord::Migration[5.1]
  def change
    remove_reference :collections, :creator, foreign_key: true
  end
end
