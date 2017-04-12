Rails.application.routes.draw do
  devise_for :users
  resources :tasks
  root to: 'users#index'

  get "/tasks", to: 'tasks#index', as: "tasks_index"
  get '/users', to: 'users#index'
  get '/users/:user_id/tasks', to: 'task_user#index', as: "task_users_index"
  post "/tasks/:tasks_id/users", to: 'task_user#assign', as: "task_users_assign"
  post "/tasks/:tasks_id/users", to: 'task_user#create', as: "task_users"
end
