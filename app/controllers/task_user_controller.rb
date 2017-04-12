class TaskUserController < ApplicationController

	def index
		@user = User.find(params[:user_id])
		@tasks = Task.all
		
	end

	def assign
		@user = User.find_by_name(params[:name])
		if not @user.nil?
		@task = Task.find(params[:tasks_id])
		@user.tasks.push(@task)
		redirect_to task_users_index_path(@user.id)
		else
			flash[:notice] = "Marine not found"
			redirect_to tasks_index_path

		end
	end

	def create
    @user = current_user
    @task = Task.find(params[:tasks_id])
    @user.tasks.push(@task)

    redirect_to task_users_index_path(current_user.id)
  end
end

