# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170921164409) do

  create_table "collection_items", force: :cascade do |t|
    t.integer "position"
    t.integer "collection_id"
    t.string "collectible_type"
    t.integer "collectible_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["collectible_type", "collectible_id"], name: "index_collection_items_on_collectible_type_and_collectible_id"
    t.index ["collection_id"], name: "index_collection_items_on_collection_id"
  end

  create_table "collections", force: :cascade do |t|
    t.string "name"
    t.text "description"
    t.integer "creator_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "approval", default: 0
    t.index ["creator_id"], name: "index_collections_on_creator_id"
  end

  create_table "lesson_versions", force: :cascade do |t|
    t.text "data"
    t.integer "media_type"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "name"
    t.text "description"
    t.integer "lesson_id"
    t.integer "creator_id"
    t.integer "approval", default: 0
    t.index ["creator_id"], name: "index_lesson_versions_on_creator_id"
  end

  create_table "lessons", force: :cascade do |t|
    t.integer "active_version_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["active_version_id"], name: "index_lessons_on_active_version_id"
  end

  create_table "pages", force: :cascade do |t|
    t.string "name"
    t.string "title"
    t.text "body"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "platform_preferences", force: :cascade do |t|
    t.string "name"
    t.integer "preftype", default: 0, null: false
    t.string "string_field"
    t.text "text_field"
    t.boolean "bool_field"
    t.integer "integer_field"
    t.float "float_field"
    t.decimal "decimal_field"
    t.datetime "datetime_field"
    t.datetime "timestamp_field"
    t.time "time_field"
    t.date "date_field"
    t.binary "binary_field"
    t.string "ref_field_type"
    t.integer "ref_field_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.text "rich_text_field"
    t.index ["ref_field_type", "ref_field_id"], name: "index_platform_preferences_on_ref_field_type_and_ref_field_id"
  end

  create_table "role_users", force: :cascade do |t|
    t.integer "role_id"
    t.integer "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["role_id"], name: "index_role_users_on_role_id"
    t.index ["user_id"], name: "index_role_users_on_user_id"
  end

  create_table "roles", force: :cascade do |t|
    t.string "name"
    t.text "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "topics", force: :cascade do |t|
    t.string "name"
    t.text "description"
    t.string "color"
    t.boolean "approved"
    t.string "cover_image_url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer "sign_in_count", default: 0, null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string "current_sign_in_ip"
    t.string "last_sign_in_ip"
    t.string "confirmation_token"
    t.datetime "confirmed_at"
    t.datetime "confirmation_sent_at"
    t.string "unconfirmed_email"
    t.integer "failed_attempts", default: 0, null: false
    t.string "unlock_token"
    t.datetime "locked_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "first_name"
    t.string "last_name"
    t.string "nickname"
    t.index ["confirmation_token"], name: "index_users_on_confirmation_token", unique: true
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
    t.index ["unlock_token"], name: "index_users_on_unlock_token", unique: true
  end

end
