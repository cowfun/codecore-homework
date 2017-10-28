class SessionsController < ApplicationController
  def new
  end

  def create
    user = User.find_by(email: session_params[:email])

    if user && user.authenticate(session_params[:password])
      session[:user_id] = user.id

      redirect_to root_path, notice: 'Thank you for signing in!'
    else
      # The method '.now' on flash will tell to exist only for the duration of
      # the current request instead of the next request as well
      flash.now[:alert] = 'Wrong email or password!'
      render :new
    end
  end

  def destroy
    session[:user_id] = nil
    redirect_to root_path
  end

  private
  def session_params
    params.require(:session).permit(:email, :password, :old_password)
  end
end
