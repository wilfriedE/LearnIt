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

  #programs pages
  resources :programs, only: [:show]


  #teams pages
  resources :teams, only: [:index, :show]


  #moderate namespace
  namespace :moderate do
    get '/' => 'moderations#dashboard'
    get 'mytickets' => 'moderations#mytickets'
    get 'guides' => 'moderations#guides'
    get 'lessons' => 'lessons#index'
    get 'programs' => 'programs#index'
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
  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  # root 'welcome#index'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
