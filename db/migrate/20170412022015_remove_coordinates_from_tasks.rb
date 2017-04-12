class RemoveCoordinatesFromTasks < ActiveRecord::Migration[5.1]
  def change
    remove_column :tasks, :coordinates, :integer
  end
end
