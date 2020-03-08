# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.create(user_name: '', email: '', password_digest: '')
Restaurant.create(user_name: '', email: '', password_digest: '', address: '', name: '', phone: '', image: '')
Food.create(name: '', description: '', image: '', price: '')
# Food_user.create(user_id: '', food_id: '', liked: '')