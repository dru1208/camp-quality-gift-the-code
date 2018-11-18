class SessionsController < ApplicationController
	def self.generate_jwt(payload)
    super(payload)
  end

  def create
  	puts "creating session"
    user = User.find_by_email(params[:email])
    if user && user.authenticate(params[:password])
      payload = {
        id: user[:id]
      }
      jwt = SessionsController.generate_jwt(payload)
      render json: jwt
    else
      render json: false
    end
  end
end
