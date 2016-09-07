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

ActiveRecord::Schema.define(version: 20160902171807) do

  create_table "activities", force: :cascade do |t|
    t.string   "type"
    t.string   "name"
    t.text     "description"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.string   "status"
  end

  create_table "assignments", force: :cascade do |t|
    t.integer  "assignable_id"
    t.string   "assignable_type"
    t.integer  "claimer_id"
    t.string   "claimer_type"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  add_index "assignments", ["assignable_type", "assignable_id"], name: "index_assignments_on_assignable_type_and_assignable_id"
  add_index "assignments", ["claimer_type", "claimer_id"], name: "index_assignments_on_claimer_type_and_claimer_id"

  create_table "contributions", force: :cascade do |t|
    t.integer  "contributor_id"
    t.string   "contributor_type"
    t.integer  "contribution_id"
    t.string   "contribution_type"
    t.datetime "created_at",        null: false
    t.datetime "updated_at",        null: false
  end

  add_index "contributions", ["contribution_type", "contribution_id"], name: "index_contributions_on_contribution_type_and_contribution_id"
  add_index "contributions", ["contributor_type", "contributor_id"], name: "index_contributions_on_contributor_type_and_contributor_id"

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

  create_table "curated_items", force: :cascade do |t|
    t.integer  "program_id"
    t.integer  "curatable_id"
    t.string   "curatable_type"
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
  end

  add_index "curated_items", ["curatable_type", "curatable_id"], name: "index_curated_items_on_curatable_type_and_curatable_id"
  add_index "curated_items", ["program_id"], name: "index_curated_items_on_program_id"

  create_table "lesson_versions", force: :cascade do |t|
    t.string   "name"
    t.text     "description"
    t.boolean  "approved"
    t.string   "color"
    t.integer  "lesson_id"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.integer  "media_id"
    t.text     "reason"
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

  create_table "media_outlets", force: :cascade do |t|
    t.integer  "media_content_id"
    t.integer  "outlet_id"
    t.string   "outlet_type"
    t.datetime "created_at",       null: false
    t.datetime "updated_at",       null: false
    t.integer  "content_id"
    t.string   "content_type"
  end

  add_index "media_outlets", ["content_type", "content_id"], name: "index_media_outlets_on_content_type_and_content_id"
  add_index "media_outlets", ["media_content_id"], name: "index_media_outlets_on_media_content_id"
  add_index "media_outlets", ["outlet_type", "outlet_id"], name: "index_media_outlets_on_outlet_type_and_outlet_id"

  create_table "programs", force: :cascade do |t|
    t.string   "name"
    t.text     "description"
    t.string   "cover_image_url"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  create_table "subscriptions", force: :cascade do |t|
    t.integer  "subscription_id"
    t.string   "subscription_type"
    t.integer  "subscriber_id"
    t.string   "subscriber_type"
    t.datetime "created_at",        null: false
    t.datetime "updated_at",        null: false
    t.string   "marking"
  end

  add_index "subscriptions", ["subscriber_type", "subscriber_id"], name: "index_subscriptions_on_subscriber_type_and_subscriber_id"
  add_index "subscriptions", ["subscription_type", "subscription_id"], name: "index_subscriptions_on_subscription_type_and_subscription_id"

  create_table "teams", force: :cascade do |t|
    t.string   "name"
    t.integer  "number"
    t.string   "email"
    t.string   "website"
    t.string   "moto"
    t.integer  "program_id"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.string   "cover_image_url"
  end

  add_index "teams", ["number"], name: "index_teams_on_number"
  add_index "teams", ["program_id"], name: "index_teams_on_program_id"

  create_table "topic_items", force: :cascade do |t|
    t.integer  "topic_id"
    t.integer  "topicable_id"
    t.string   "topicable_type"
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
  end

  add_index "topic_items", ["topic_id"], name: "index_topic_items_on_topic_id"
  add_index "topic_items", ["topicable_type", "topicable_id"], name: "index_topic_items_on_topicable_type_and_topicable_id"

  create_table "topics", force: :cascade do |t|
    t.string   "name"
    t.text     "description"
    t.string   "color"
    t.boolean  "approved"
    t.string   "cover_image_url"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  create_table "track_courses", force: :cascade do |t|
    t.integer  "position"
    t.integer  "track_id"
    t.integer  "course_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "track_courses", ["course_id"], name: "index_track_courses_on_course_id"
  add_index "track_courses", ["track_id"], name: "index_track_courses_on_track_id"

  create_table "tracks", force: :cascade do |t|
    t.string   "name"
    t.text     "description"
    t.boolean  "approved"
    t.string   "color"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.string   "confirmation_token"
    t.datetime "confirmed_at"
    t.datetime "confirmation_sent_at"
    t.string   "unconfirmed_email"
    t.integer  "failed_attempts",        default: 0,  null: false
    t.string   "unlock_token"
    t.datetime "locked_at"
    t.datetime "created_at",                          null: false
    t.datetime "updated_at",                          null: false
    t.string   "first_name"
    t.string   "last_name"
    t.string   "nickname"
  end

  add_index "users", ["confirmation_token"], name: "index_users_on_confirmation_token", unique: true
  add_index "users", ["email"], name: "index_users_on_email", unique: true
  add_index "users", ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  add_index "users", ["unlock_token"], name: "index_users_on_unlock_token", unique: true

end
