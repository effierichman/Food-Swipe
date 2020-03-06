class CreateRestaurants < ActiveRecord::Migration[6.0]
  def change
    create_table :restaurants do |t|
      t.string :username
      t.string :email
      t.string :password_digest
      t.string :address
      t.string :name
      t.string :rest_name
      t.string :phone
      t.string :image

      t.timestamps
    end
  end
end
