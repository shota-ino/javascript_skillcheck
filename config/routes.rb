Rails.application.routes.draw do
  root 'articles#index'
  resources :articles
  # resources :articles, except: :create
end
