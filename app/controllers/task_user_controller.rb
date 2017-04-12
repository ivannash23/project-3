class TaskUserController < ApplicationController

	def index
		@user = User.find(params[:user_id])
		@tasks = Task.all
		
	end

	def assign
		@user = User.find_by_name(params[:name])
		if @user.nil?
			flash[:notice] = "Marine not found"
			redirect_to tasks_index_path
		else
		@task = Task.find(params[:tasks_id])
			if current_user.company == @user.company && current_user.platoon == @user.platoon
			@user.tasks.push(@task)
			redirect_to task_users_index_path(@user.id)
			else
				flash[:notice] = "Not your Marine"
			redirect_to tasks_path
			end
		end
	end

	def create
    @user = current_user
    @task = Task.find(params[:tasks_id])
    @user.tasks.push(@task)

    redirect_to task_users_index_path(current_user.id)
  end

  def destroy
    @user = User.find_by_id(params[:tasks_id])
    @task = Task.find_by_id(params[:user])
    if current_user.Rank > 4 && current_user.company == @user.company && current_user.platoon == @user.platoon
    @user.tasks.delete(@task)
    redirect_to task_users_index_path(@user.id)
	  else
	  	flash[:notice] = "Only E-4s and above can delete other Marines Tasks"
	  end
	end
end

