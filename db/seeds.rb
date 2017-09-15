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
user.make_moderator!
user.make_editor!
user.make_admin!

Page.create([
  {name: "home", title: "Home", body: File.read(Rails.root.join("vendor", "templates", "home.md"))},
  {name: "about", title: "About", body: File.read(Rails.root.join("vendor", "templates", "about.md"))},
  {name: "contribute", title: "Contribute Content", body: File.read(Rails.root.join("vendor", "templates", "contribute.md"))}
])

PlatformPreference.create([
  { name: 'brand', preftype: PlatformPreference.preftypes[:string], string_field: "LearnIt" },
  { name: 'description', preftype: PlatformPreference.preftypes[:rich_text], rich_text_field: "An open learning platform." },
  { name: 'configured', preftype: PlatformPreference.preftypes[:bool], bool_field: false },
  { name: 'menus', preftype: PlatformPreference.preftypes[:string], string_field: "home,about,contribute" },
  { name: 'container_fuild', preftype: PlatformPreference.preftypes[:bool], bool_field: false }
])
