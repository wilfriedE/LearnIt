class AddCreatorFromCollection < ActiveRecord::Migration[5.1]
  def change
    add_reference :collections, :creator, polymorphic: true
  end
end
