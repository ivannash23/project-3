class AddAtrributesToTask < ActiveRecord::Migration[5.1]
  def change
    add_column :tasks, :coordinates, :integer
  end
end
