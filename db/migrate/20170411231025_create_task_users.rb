class CreateTaskUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :task_users do |t|
      t.belongs_to :user
      t.belongs_to :task

      t.timestamps
    end
  end
end
