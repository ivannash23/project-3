class Task < ApplicationRecord


	has_many :task_user
	has_many :users, through: :task_user
end
