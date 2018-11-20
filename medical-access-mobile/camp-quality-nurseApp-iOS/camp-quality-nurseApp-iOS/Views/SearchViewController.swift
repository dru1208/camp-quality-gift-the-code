//
//  SearchViewController.swift
//  camp-quality-nurseApp-iOS
//
//  Created by Wiljay Flores on 2018-11-17.
//  Copyright © 2018 wiljay. All rights reserved.
//

import UIKit
import FirebaseDatabase


class SearchViewController: UIViewController, UITableViewDelegate, UITableViewDataSource, UISearchBarDelegate {
    
    @IBOutlet weak var searchBar: UISearchBar!
    @IBOutlet weak var camperTableView: UITableView!

    var isFiltering = false

    var campers = [Camper]()
    var filteredCampers = [Camper]()
    let database = DatabaseReference()
   
    

    
    
    
    override func viewDidLoad() {
        
        configureDatabase()
        searchBar.delegate = self
        
        super.viewDidLoad()

        
    }
    
    func tableView(_ tableView: UITableView, heightForRowAt indexPath: IndexPath) -> CGFloat {
        return camperTableView.frame.height/6
    }
    
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        
        if isFiltering {
            return filteredCampers.count
        } else {
            return campers.count
        }

    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: "camperCell") as! CamperViewCell
        if isFiltering {
            cell.configureCell(camper: filteredCampers[indexPath.row])
        } else {
            cell.configureCell(camper: campers[indexPath.row])
        }
        
        return cell
    }
    
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        if segue.identifier == "toCamperDetail" {
            let tableViewCell = sender as! CamperViewCell
            let viewController = segue.destination as! CamperDetailViewController
            viewController.camper = tableViewCell.camper
        }
    }
    
    func searchBar(_ searchBar: UISearchBar, textDidChange searchText: String) {
        if searchBar.text != "" {
            isFiltering = true
            filteredCampers = campers.filter({( camper : Camper) -> Bool in
                return camper.name.lowercased().contains(searchText.lowercased())
            })
        } else {
            isFiltering = false
        }
        
        camperTableView.reloadData()

    }
    
    func configureDatabase() {
        let database = Database.database().reference()
        
        database.child("camper/").observe(.childAdded) { (DataSnapshot) in
            let dict = DataSnapshot.value as! NSDictionary
            let id = DataSnapshot.key
            self.createCampers(camper: dict,id: id)
        }
    
    }
    
    func createCampers(camper: NSDictionary, id: String) {
        let allergies = camper["allergy"] as! String
        let firstName = camper["firstName"] as! String
        let lastName = camper["lastName"] as! String
        let notes = camper["notes"] as! String
        let otcPermitted = camper["otcPermitted"] as! Bool
        let primaryDiagnosis = camper["primaryDiagnosis"] as! String
        
        self.campers.append(Camper(id: id, firstName: firstName, lastName: lastName, primaryDiagnosis: primaryDiagnosis, notes: notes, otcPremitted: otcPermitted, allergies: allergies))
        
        camperTableView.reloadData()
        
    }

}
    

