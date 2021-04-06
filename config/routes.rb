Rails.application.routes.draw do
  defaults do
    resources :domains
  end

  get 'main/home', format: :html

  root to: 'main#home'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
