Rails.application.routes.draw do
  post '/auth/login', to: 'authentication#login'
  post '/auth/verify', to: 'authentication#verify'
  resources :foods
  resources :restaurants
  resources :users


  post "/users/add_liked_food/:food_id", to: "users#add_liked_food"
  post "users/remove_liked_food/:food_id", to: "users#remove_liked_food"

  post "/users/add_disliked_food/:food_id", to: "users#add_disliked_food"
  post "users/remove_disliked_food/:food_id", to: "users#remove_disliked_food"

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
