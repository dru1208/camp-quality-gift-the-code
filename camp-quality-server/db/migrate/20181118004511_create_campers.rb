class CreateCampers < ActiveRecord::Migration[5.2]
  def change
    create_table :campers do |t|
    	t.string :user_id
    	t.string :first_name
    	t.string :last_name
    	t.string :preferred_name
    	t.date :date_of_birth
    	t.string :gender
    	t.integer :camper_years
    	t.string :shirt_size
    	t.string :travel_arrangements
    	t.string :cq_status
    	t.string :individual_education_plan
    end
  end
end