class CreateMediaContents < ActiveRecord::Migration
  def change
    create_table :media_contents do |t|
      t.string :type
      t.string :video_url
      t.string :pdf_url

      t.timestamps null: false
    end
  end
end
