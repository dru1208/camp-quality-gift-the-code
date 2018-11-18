Rails.application.routes.draw do
	post '/login', to: 'sessions#create'
  post '/register', to: 'users#create'
end
