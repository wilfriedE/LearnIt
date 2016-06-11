# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Program.create(name: 'FRC', description: "The FIRST Robotics Competition")
Program.create(name: 'FTC', description: "The FIRST Tech Challenge")
Program.create(name: 'FLL', description: "The FIRST LEGO League")
Program.create(name: 'FLLJr', description: "The FIRST LEGO League Jr.")
Program.create(name: 'General', description: "General Program Material")
