class CreateJoinTableUserFood < ActiveRecord::Migration[6.0]
  def change
    create_join_table :users, :foods do |t|
      t.boolean :liked, default: false
      # t.index [:user_id, :food_id]
      # t.index [:food_id, :user_id]
    end
  end
end
