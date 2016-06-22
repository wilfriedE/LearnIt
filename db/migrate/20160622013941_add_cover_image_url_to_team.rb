class AddCoverImageUrlToTeam < ActiveRecord::Migration
  def change
    add_column :teams, :cover_image_url, :string
  end
end
