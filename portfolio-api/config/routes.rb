Rails.application.routes.draw do
  namespace :api do
    resources :projects, except: [:new, :edit]
  end
end
