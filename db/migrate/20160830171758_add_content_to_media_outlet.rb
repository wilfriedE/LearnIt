class AddContentToMediaOutlet < ActiveRecord::Migration
  def change
    add_reference :media_outlets, :content, polymorphic: true, index: true
  end
end
