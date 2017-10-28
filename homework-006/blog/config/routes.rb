Rails.application.routes.draw do


  namespace :admin do
    resources :dashboard, only: [:index]
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'posts#index'
  resources :posts do
    resources :comments, shallow: true, only: [:create, :destroy]
  end

  resource :session, only: [:new, :create, :edit, :update, :destroy]
  resources :users, only: [:new, :create, :edit, :update] do
    get :edit_password, on: :member
    patch :update_password, on: :member
  end

end
