class UsersController < ApplicationController
	def create
		user = User.new(
			email: params[:email],
			password: params[:password],
			password_confirmation: params[:passwordConfirmation]
		)

		if user.save
			payload = { email: user[:email] }
			jwt = UsersController.generate_jwt(payload)
			render json: jwt
		else
			render json: false
		end
	end
end
