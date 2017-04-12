# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all
Task.delete_all
TaskUser.delete_all

User.create({name:"Ivan Miranda",
						email:"i@m",
						 password:"123456",
						 Rank: 6})
User.create({email: FFaker::Internet.free_email,
 						name: FFaker::Name.name,
 						Rank: 3,
 						company: FFaker::NatoAlphabet.alphabetic_code,
 						platoon: "3rd",
 						password: "123456"})
User.create({email: FFaker::Internet.free_email,
 						name: FFaker::Name.name,
 						Rank: 4,
 						company: FFaker::NatoAlphabet.alphabetic_code,
 						platoon: "3rd",
 						password: "123456"})
User.create({email: FFaker::Internet.free_email,
 						name: FFaker::Name.name,
 						Rank: 5,
 						company: FFaker::NatoAlphabet.alphabetic_code,
 						platoon: "1st",
 						password: "123456"})
User.create({email: FFaker::Internet.free_email,
 						name: FFaker::Name.name,
 						Rank: 1,
 						company: FFaker::NatoAlphabet.alphabetic_code,
 						platoon: "1st",
 						password: "123456"})

Task.create({title: "Dentist",
						date: Time.strptime("04/15/2017 8:00", "%m/%d/%Y %H:%M"),
						lat: "32.888126",
						lng: "-117.130236"})
Task.create({title: "Physical Fitness Test",
						date: Time.strptime("04/15/2017 6:30", "%m/%d/%Y %H:%M"),
						lat: "32.887752", 
						lng: "-117.141945" })
Task.create({title: "Morning PT",
						date: Time.strptime("04/15/2017 5:30", "%m/%d/%Y %H:%M"),
						lat: "32.888127", 
						lng: "-117.134978" })
