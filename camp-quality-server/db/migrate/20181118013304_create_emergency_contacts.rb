class CreateEmergencyContacts < ActiveRecord::Migration[5.2]
  def change
    create_table :emergency_contacts do |t|
    	t.string :first_name
		t.string :last_name
		t.string :relationship
		t.string :home_phone
		t.string :work_phone
		t.string :cell_phone
    end
  end
end
