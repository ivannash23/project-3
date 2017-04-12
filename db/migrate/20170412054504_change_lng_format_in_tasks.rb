class ChangeLngFormatInTasks < ActiveRecord::Migration[5.1]
  def up
    change_column :tasks, :lng, :string
  end

  def down
    change_column :tasks, :lng, :integer
  end
end
