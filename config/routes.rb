Rails.application.routes.draw do
  root 'pages#index'

  # lessons
  resources :lessons, except: [:edit, :update] do
    member do
      get  :propose_update, path: "propose-update"
      post :create_new_version, path: "propose-update", as: :new_version_submission
      put  :lesson_approval, path: "lesson-approval", as: :approval
    end
  end

  # lesson_versions
  get "lessons-form/media-field" => 'lesson_versions#lesson_media_field', as: :lesson_media_field
  resources :lesson_versions do
    member do
      put  :lesson_version_approval, path: "lesson-version-approval", as: :approval
    end
  end

  # collections
  resources :collections do
    collection do
      get :search_collectible, path: "search-collectible"
      get :list_collectibles, path: "list-collectibles"
      get :add_collectible, path: "add-collectible"
    end
    member do
      delete :remove_collection_item, path: "remove-collection-item/:collection_item_id"
      put    :collection_approval, path: "collection-approval", as: :approval
      get    :player, path: "player/(:page)"
    end
  end

  # topics pages
  resources :topics, only: [:index, :show]

  # users authentication area
  devise_for :users, path: 'auth', controllers: { registrations: 'registrations' }, path_names: { sign_in: 'login', sign_out: 'logout', registration: 'register' }

  # user profile
  get 'profile' => 'profile#page', as: :user_profile
  get 'profile/notifications' => 'notifications#index', as: :notifications
  get 'profile/notifications/:id' => 'notifications#show', as: :user_notification

  # administrate namespace
  scope :administrate do
    get '/'                               => 'platform#index', as: :administrate
    get '/preferences'                    => 'platform#preferences', as: :administrate_preferences
    get '/pages'                          => 'platform#pages', as: :administrate_pages
    get '/users'                          => 'platform#users', as: :administrate_users
    put '/users/:id/make-admin'           => 'platform#make_user_admin', as: :make_user_admin
    put '/users/:id/make-editor'          => 'platform#make_user_editor', as: :make_user_editor
    put '/users/:id/make-moderator'       => 'platform#make_user_moderator', as: :make_user_moderator
    put '/users/:id/make-contributor'     => 'platform#make_user_contributor', as: :make_user_contributor
    put '/users/:id/ban'                  => 'platform#ban_user', as: :ban_user
    put '/users/:id/remove-role/:role_id' => 'platform#remove_user_role', as: :remove_user_role
  end

  scope :preferences do
    get  '/new'             => 'preferences#new', as: :new_preference
    get  '/edit/:id'        => 'preferences#edit', as: :edit_preference
    post '/create'          => 'preferences#create', as: :create_preference
    put  '/update/:id'      => 'preferences#update', as: :update_preference
    delete '/delete/:id'    => 'preferences#destroy', as: :delete_preference
    get '/preference_field' => 'preferences#preference_field', as: :preference_field
  end

  # moderation
  scope :moderate do
    get '/' => "moderation#index", as: :moderate
    get '/:active' => "moderation#index", as: :moderate_x
  end

  # pages
  get 'library'          => 'pages#library', as: :library
  get '/:name'           => 'pages#show', as: :page
  scope :pages do
    get '/new'                => 'pages#new', as: :new_page
    post '/create'            => 'pages#create', as: :create_page
    get '/:name/edit'         => 'pages#edit', as: :edit_page
    get '/:name/edit_wysiwyg' => 'pages#edit_wysiwyg', as: :edit_wysiwyg_page
    put '/:name/update'       => 'pages#update', as: :update_page
    delete '/:name/delete'    => 'pages#destroy', as: :delete_page
  end
end
