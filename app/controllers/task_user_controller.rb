class TaskUserController < ApplicationController

	def index
		@user = User.find(params[:user_id])
		@tasks = Task.all
		
	end

	def create
    @user = current_user
    @task = Task.find(params[:tasks_id])
    @user.tasks.push(@task)

    redirect_to '/tasks'
  end
end

