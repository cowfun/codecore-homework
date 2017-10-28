class UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.new user_params
    @user.save
    redirect_to root_path
  end

  def edit
    @user = current_user
  end

  def update
    @user = current_user
    @user.update edit_params
    redirect_to root_path, notice: 'User information successfully changed'
  end

  def edit_password
    @user = current_user
  end

  def update_password
    @user = current_user
    if @user && @user.authenticate(params[:user][:current_password])
      @user.update password_params
      redirect_to root_path, notice: 'Password successfully changed'
    else
      flash.now[:alert] = 'Wrong password'
      render :edit_password
    end
  end

  private
  def user_params
    params.require(:user).permit(:first_name, :last_name, :email, :password, :password_confirmation)
  end

  def edit_params
    params.require(:user).permit(:first_name, :last_name, :email)
  end

  def password_params
    params.require(:user).permit(:password, :password_confirmation)
  end
end
