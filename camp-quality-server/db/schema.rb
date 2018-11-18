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

ActiveRecord::Schema.define(version: 2018_11_18_013304) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "campers", force: :cascade do |t|
    t.string "user_id"
    t.string "first_name"
    t.string "last_name"
    t.string "preferred_name"
    t.date "date_of_birth"
    t.string "gender"
    t.integer "camper_years"
    t.string "shirt_size"
    t.string "travel_arrangements"
    t.string "cq_status"
    t.string "individual_education_plan"
  end

  create_table "emergency_contacts", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "relationship"
    t.string "home_phone"
    t.string "work_phone"
    t.string "cell_phone"
  end

  create_table "guardians", force: :cascade do |t|
    t.integer "guardian_id"
    t.string "first_name"
    t.string "preferred_name"
    t.string "home_phone"
    t.string "work_phone"
    t.string "cell_phone"
    t.date "date_of_birth"
    t.string "gender"
    t.string "job"
    t.string "employer"
  end

  create_table "users", force: :cascade do |t|
    t.string "email"
    t.string "password"
  end

end
