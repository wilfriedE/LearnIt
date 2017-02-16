class CreatePlatformPreferences < ActiveRecord::Migration[5.0]
  def change
    create_table :platform_preferences do |t|
      t.string :name
      t.string :preftype
      t.string :string_field
      t.text :text_field
      t.boolean :bool_field
      t.integer :integer_field
      t.float :float_field
      t.decimal :decimal_field
      t.datetime :datetime_field
      t.timestamp :timestamp_field
      t.time :time_field
      t.date :date_field
      t.binary :binary_field
      t.references :ref_field, polymorphic: true

      t.timestamps
    end
  end
end
