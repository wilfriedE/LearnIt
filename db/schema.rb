# encoding: UTF-8
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

ActiveRecord::Schema.define(version: 20160605030135) do

  create_table "course_lessons", force: :cascade do |t|
    t.integer  "position"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer  "course_id"
    t.integer  "lesson_id"
  end

  create_table "courses", force: :cascade do |t|
    t.string   "name"
    t.text     "description"
    t.boolean  "approved"
    t.string   "color"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "lesson_versions", force: :cascade do |t|
    t.string   "name"
    t.text     "description"
    t.boolean  "approved"
    t.string   "color"
    t.integer  "lesson_id"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.integer  "media_id"
  end

  add_index "lesson_versions", ["lesson_id"], name: "index_lesson_versions_on_lesson_id"
  add_index "lesson_versions", ["media_id"], name: "index_lesson_versions_on_media_id"

  create_table "lessons", force: :cascade do |t|
    t.integer  "active_version_id"
    t.datetime "created_at",        null: false
    t.datetime "updated_at",        null: false
    t.boolean  "approved"
  end

  add_index "lessons", ["active_version_id"], name: "index_lessons_on_active_version_id"

  create_table "media_contents", force: :cascade do |t|
    t.string   "type"
    t.string   "video_url"
    t.string   "pdf_url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
