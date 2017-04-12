class AddLngToTasks < ActiveRecord::Migration[5.1]
  def change
    add_column :tasks, :lng, :integer
  end
end
