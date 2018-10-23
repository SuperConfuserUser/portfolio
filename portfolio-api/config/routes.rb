Rails.application.routes.draw do
  namespace :api do
    resources :projects, except: [:new, :edit]

    post 'contact', to: 'messages#create', as: 'create_message'
  end
end
