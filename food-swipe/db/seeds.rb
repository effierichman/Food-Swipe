# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# User.create(user_name: '', email: '', password_digest: '')
Restaurant.create([{
        username: 'Steve',
        email: 'steve@chickfila.com', 
        password_digest: 'thechicken',
        address: '700 Avenue of the Americas, New York, NY 10010',
        name: 'Chick Fil A',
        phone: '855-667-3232',
        image: 'https://i.imgur.com/qzH8jtd.png'
}, {username: 'Mark',
    email: 'Mark@mcdonalds.com', 
    password_digest: 'burgers',
    address: '702 Avenue of the Americas, New York, NY 10010',
    name: 'McDonalds',
    phone: '855-668-3232',
    image: 'https://i.imgur.com/VP0HtHh.png'}, {username: 'John',
    email: 'John@bychloe.com', 
    password_digest: 'bychloe',
    address: '704 Avenue of the Americas, New York, NY 10010',
    name: 'ByChloe',
    phone: '855-628-3232',
    image: 'https://i.imgur.com/QL3LT2i.png'}, {username: 'Mike',
    email: 'Mike@dennys.com', 
    password_digest: 'dennys',
    address: '706 Avenue of the Americas, New York, NY 10010',
    name: 'Dennys',
    phone: '855-628-3432',
    image: 'https://i.imgur.com/GRl5jUg.png'}])
Food.create([{name: 'Spicy Chicken', description: 'Spicy chicken goodness on a bun', image: 'https://i.imgur.com/uXp7wdS.png', price: '$4.99', restaurant_id: 1}, {name: 'Crispy Chicken', description: 'Crispy chicken goodness on a bun', image: 'https://i.imgur.com/Qxi8mef.jpg', price: '$8.99', restaurant_id: 1}, {name: 'Meatballs', description: 'Amazing Meatballs and Spaghetti', image: 'https://i.imgur.com/MPvhSlH.jpg', price: '$8.99', restaurant_id: 4}, {name: 'Tofu Salad', description: 'Delicious Salad with Tofu', image: 'https://i.imgur.com/vd27Mzg.jpg', price: '$8.99', restaurant_id: 3}, {name: 'Vegan Eggroll', description: 'An eggroll that will make you want more eggrolls', image: 'https://i.imgur.com/ujMOBjX.jpg', price: '$8.99', restaurant_id: 3}, {name: 'Double Decker Burger', description: 'Double the meat double the fun', image: 'https://i.imgur.com/tV3geF0.jpg', price: '$8.99', restaurant_id: 2}])
# Food_user.create(user_id: '', food_id: '', liked: '')

# (name: 'Double Decker Burger', description: 'Double the meat double the fun', image: 'https://i.imgur.com/tV3geF0.jpg', price: '$5.99', restaurant_id: 1),