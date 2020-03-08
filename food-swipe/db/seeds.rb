# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# User.create(user_name: '', email: '', password_digest: '')
Restaurant.create(
        username: 'Steve',
        email: 'steve@chickfila.com', 
        password_digest: 'thechicken',
        address: '700 Avenue of the Americas, New York, NY 10010',
        name: 'Chick Fil A',
        phone: '855-667-3232',
        image: 'https://i.imgur.com/qzH8jtd.png'
    )
Food.create(name: 'Spicy Chicken', description: 'Spicy chicken goodness on a bun', image: 'https://i.imgur.com/uXp7wdS.png', price: '$4.99', restaurant_id: 1)
# Food_user.create(user_id: '', food_id: '', liked: '')