class AddAttributesToUser < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :Rank, :integer
    add_column :users, :name, :string
    add_column :users, :company, :string
    add_column :users, :platoon, :string
  end
end
