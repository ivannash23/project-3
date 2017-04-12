class AddLatToTasks < ActiveRecord::Migration[5.1]
  def change
    add_column :tasks, :lat, :integer
  end
end
