# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
User.create(nickname: 'admin', first_name:'LearnIt', last_name: 'Admin', email:'admin@example.com', role: User::ROLES_T[2], password:'admin1234', password_confirmation:'admin1234').confirm
Page.create([{name: "home", title: "Home", body: "<h1>Welcome to LearnIt!</h1>"},
            {name: "about", title: "About", body: "<h1>About LearnIt!</h1>"}])
