class User < ApplicationRecord
    has_and_belongs_to_many :foods
    # belongs_to :food, through: :foods_users
end
