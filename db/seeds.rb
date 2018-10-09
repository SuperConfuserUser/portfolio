# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

 
projects = Project.create([{
  name: "Very First Project",
  description: "Hello World!",
  img_url: nil
},
{
  name: "MyFace",
  description: "The next big social media platform.",
  img_url: nil
},
{
  name: "ChitCoin",
  description: "Cryptocurrency currently valued at $0.0000000001",
  img_url: nil
},
{
  name: "Skynet",
  description: "Artificial intelligence and machine learning to make the future a better place.",
  img_url: nil
},
{
  name: "Matrix",
  description: "MMO with direct interface. The immersion is way more realistic.",
  img_url: nil
}])
 