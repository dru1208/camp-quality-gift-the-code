class CreateGuardians < ActiveRecord::Migration[5.2]
  def change
    create_table :guardians do |t|
    	t.integer :guardian_id
    	t.string :first_name
    	t.string :preferred_name
    	t.string :home_phone
    	t.string :work_phone
    	t.string :cell_phone
    	t.date :date_of_birth
    	t.string :gender
    	t.string :job
    	t.string :employer
    end
  end
end
