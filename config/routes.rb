Rails.application.routes.draw do
  root 'welcome#index'

  #welcome pages
  get 'library' => 'welcome#library'
  get 'contribute' => 'welcome#contribute'
  get 'about'  => 'welcome#about'

  #lesson pages
  get 'lesson/:id' => 'lessons#show'
  resources :lessons, except: [:update, :create, :destroy] do
    member do
      get 'propose_update'
      #other lesson specific actions here
    end
  end

  #lesson_version pages
  resources :lesson_versions do
    member do
      #other actions here
    end
  end

  #media_content pages
  get 'media_contents' => 'media_contents#index'
    #helper for managing different field types
  get 'media_contents/fields/:type' =>  'media_contents#fields'

  #course pages
  resources :courses do
    member do
      get 'viewing/:position', action: :viewing, as: :viewing
      #other actions here
    end
  end

  #tracks pages
  resources :tracks do
    member do
      get 'viewing/:position', action: :viewing, as: :viewing
      #other actions here
    end
  end

  #topics pages
  resources :topics, only: [:index, :show]


  #teams pages
  resources :teams, only: [:index, :show]


  #moderate namespace
  namespace :moderate do
    get '/' => 'moderations#dashboard'
    get 'mytickets' => 'moderations#mytickets'
    get 'guides' => 'moderations#guides'
    get 'lessons' => 'lessons#index'
    get 'teams' => 'teams#index'
    get 'topics' => 'topics#index'
    get 'lesson_versions' => 'lesson_versions#index'
    get 'tracks' => 'tracks#index'
    get 'courses' => 'courses#index'
    get 'tickets' => 'tickets#index'
    get 'tickets/:id' => 'tickets#show', as: :ticket
  end
  post 'tickets/:id/claim' => 'moderate/tickets#claim', as: :claim_ticket
  post 'tickets/:id/unclaim' => 'moderate/tickets#unclaim', as: :unclaim_ticket
  post 'tickets/:id/subscribe' => 'moderate/tickets#subscribe', as: :subscribe_to_ticket
  post 'tickets/:id/unsubscribe' => 'moderate/tickets#unsubscribe', as: :unsubscribe_to_ticket
  post 'tickets/:id/assign_to/:user_id' => 'moderate/tickets#assign_to', as: :assign_ticket
  post 'tickets/:id/change_status/:state' => 'moderate/tickets#change_status', as: :change_ticket_status


  #users authentication area
  devise_for :users, path: 'auth', :controllers => { registrations: 'registrations' } , path_names: { sign_in: 'login', sign_out: 'logout', registration: 'register' }

  #user profile
  get 'profile/:id' => 'profile#show', as: :user_profile
  get 'profile/:id/notifications' => 'profile#notifications', as: :user_notifications

  #administrate namespace
  namespace :administrate do
    get '/' => 'platform#index'
  end

  #pages
  get 'pages' => 'pages#index'
  get '/:name' => 'pages#show'
end
