class AuthenticationController < ApplicationController
    before_action :authorize_request, except: :login
  
    # POST /auth/login
    def login
      puts login_params
      @user = User.find_by_username(login_params[:username])
      puts @user
      if @user.authenticate(login_params[:password]) #authenticate method provided by Bcrypt and 'has_secure_password'
        token = encode(user_id: @user.id, username: @user.username)
        render json: { user: @user, token: token }, status: :ok
        puts token
      else
        render json: { error: 'unauthorized' }, status: :unauthorized
      end
    end
    
    # GET /auth/verify
    def verify
      render json: @current_user, status: :ok
    end
  
  
    private
  
    def login_params
      params.require(:user).permit(:username, :password)
    end
  end