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
      get :search_collectible, path: "search-collectible", as: :search_collectible
      get :list_collectibles, path: "list-collectibles", as: :list_collectibles
      get :add_lesson, path: "add-lesson", as: :add_lesson_to
      get :add_lesson_version, path: "add-lesson-version", as: :add_lesson_version_to
      get :add_collection, path: "add-collection", as: :add_collection_to
    end
  end

  # topics pages
  resources :topics, only: [:index, :show]

  # users authentication area
  devise_for :users, path: 'auth', controllers: { registrations: 'registrations' }, path_names: { sign_in: 'login', sign_out: 'logout', registration: 'register' }

  # user profile
  get 'profile/:id' => 'profile#show', as: :user_profile
  get 'profile/:id/notifications' => 'profile#notifications', as: :user_notifications

  # administrate namespace
  scope :administrate do
    get '/'            => 'platform#index', as: :administrate
    get '/preferences' => 'platform#preferences', as: :administrate_preferences
    get '/pages'       => 'platform#pages', as: :administrate_pages
  end

  scope :preferences do
    get  '/new'             => 'preferences#new_preference', as: :new_preference
    get  '/edit/:id'        => 'preferences#edit_preference', as: :edit_preference
    post '/create'          => 'preferences#create_preference', as: :create_preference
    put  '/update/:id'      => 'preferences#update_preference', as: :update_preference
    delete '/delete/:id'    => 'preferences#delete_preference', as: :delete_preference
    get '/preference_field' => 'preferences#preference_field', as: :preference_field
  end

  # moderation
  scope :moderate do
    get '/' => "moderation#index", as: :moderate
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
    delete '/:name/delete'    => 'pages#delete', as: :delete_page
  end
end
