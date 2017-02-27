class AddRichTextToPlatformPreferences < ActiveRecord::Migration[5.0]
  def change
    add_column :platform_preferences, :rich_text_field, :text
  end
end
