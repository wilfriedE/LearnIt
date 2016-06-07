Rails.application.routes.draw do
  root 'welcome#index'

  #welcome pages
  get 'library' => 'welcome#library'
  get 'contribute' => 'welcome#contribute'
  get 'about'  => 'welcome#about'

  #lesson pages
  get 'lesson/:id' => 'lessons#show'
  resources :lessons do
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
