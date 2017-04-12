class RemoveCoordinatesFromUsers < ActiveRecord::Migration[5.1]
  def change
    remove_column :users, :coordinates, :integer
  end
end
