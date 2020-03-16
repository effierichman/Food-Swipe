class UsersController < ApplicationController
  before_action :authorize_request, except: :create
  before_action :set_user, only: [:show, :update, :destroy]

  # GET /users
  def index
    @users = User.all

    render json: @users
  end

  # GET /users/1
  def show
    render json: @user, :include => {:foods => {include: :restaurant}}
  end

  # POST /users
  def create
    @user = User.new(user_params)

    if @user.save
      render json: @user, status: :created, location: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /users/1
  def update
    p params
    if @user.update(user_params)
      render json: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # DELETE /users/1
  def destroy
    @user.destroy
  end
  
  # /users/add_liked_food/:food_id
  def add_liked_food
    @liked_foods = @current_user.foods
    @food_to_like = Food.find(params[:food_id])
    @liked_foods << @food_to_like
  end

   # /users/remove_liked_food/:food_id
  def remove_liked_food
   @current_user.foods.delete(Food.find(params[:food_id]))
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def user_params
      params.require(:user).permit(:username, :email, :password)
    end
end
