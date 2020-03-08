class AddRestaurantIdToFoods < ActiveRecord::Migration[6.0]
  def change
    add_column :foods, :restaurant_id, :integer
  end
end
