# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Role::TYPES.each do |role|
  Role.find_or_create_by({name: role})
end

user = User.where(nickname: :admin).first_or_create(nickname: 'admin', first_name:'LearnIt', last_name: 'Admin', email:'admin@example.com', password:'admin1234', password_confirmation:'admin1234')
user.confirm
user.make_moderator
user.make_editor
user.make_admin

Page.create([
  {name: "home", title: "Home", body: "<h1>Welcome to LearnIt!</h1>"},
  {name: "about", title: "About", body: "<h1>About LearnIt!</h1>"}
])

PlatformPreference.create([
  { name: 'brand', preftype: PlatformPreference.preftypes[:string], string_field: "LearnIt" },
  { name: 'description', preftype: PlatformPreference.preftypes[:rich_text], rich_text_field: "A centralized collection of resource for the your learning needs." },
  { name: 'configured', preftype: PlatformPreference.preftypes[:bool], bool_field: false }
])
