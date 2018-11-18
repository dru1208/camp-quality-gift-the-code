//
//  SearchViewController.swift
//  camp-quality-nurseApp-iOS
//
//  Created by Wiljay Flores on 2018-11-17.
//  Copyright © 2018 wiljay. All rights reserved.
//

import UIKit


class SearchViewController: UIViewController, UITableViewDelegate, UITableViewDataSource, UISearchBarDelegate {
    
    @IBOutlet weak var searchBar: UISearchBar!
    @IBOutlet weak var camperTableView: UITableView!

    var isFiltering = false

    var campers: [Camper]?
    var filteredCampers: [Camper]?
    let database = FirebaseManager.shared
   
    

    
    
    
    override func viewDidLoad() {
        
        configureDatabase()
        self.filteredCampers = []
        searchBar.delegate = self
        
        super.viewDidLoad()

        
    }
    
    func tableView(_ tableView: UITableView, heightForRowAt indexPath: IndexPath) -> CGFloat {
        return camperTableView.frame.height/6
    }
    
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        
        return 1

    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: "camperCell") as! CamperViewCell
        

        
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

        
        camperTableView.reloadData()

    }
    
    func configureDatabase() {
        
        database.reference.child("camper").observe(.childAdded) { (DataSnapshot) in
           print(DataSnapshot.value)
        }
    
 }

}
    

