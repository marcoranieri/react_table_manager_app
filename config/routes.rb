Rails.application.routes.draw do

  devise_for :users

  # get 'pages/index'
  root 'pages#index'

  namespace :api do
    namespace :v1 do
      resources :tables
      # resources :reviews, only: %i[create destroy]
    end
  end

  get '*path', to: 'pages#index', via: :all
end

