# Products website
to run the project type in your cli:
- bundle install;
- yarn install;
- mongodb:seed;
- rails s;

## Preview

endpoints:

- api_v1_products GET    /api/v1/products(.:format)          api/v1/products#index  
-                    POST   /api/v1/products(.:format)          api/v1/products#create 
- new_api_v1_product GET    /api/v1/products/new(.:format)      api/v1/products#new    
- edit_api_v1_product GET    /api/v1/products/:id/edit(.:format) api/v1/products#edit   
-     api_v1_product GET    /api/v1/products/:id(.:format)      api/v1/products#show   
-                    PATCH  /api/v1/products/:id(.:format)      api/v1/products#update 
-                    PUT    /api/v1/products/:id(.:format)      api/v1/products#update 
-                    DELETE /api/v1/products/:id(.:format)      api/v1/products#destroy
-               root GET    /                                   products#index
