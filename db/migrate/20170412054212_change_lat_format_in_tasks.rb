class ChangeLatFormatInTasks < ActiveRecord::Migration[5.1]
  def up
    change_column :tasks, :lat, :string
  end

  def down
    change_column :tasks, :lat, :integer
  end
end
