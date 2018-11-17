//
//  SearchViewController.swift
//  camp-quality-nurseApp-iOS
//
//  Created by Wiljay Flores on 2018-11-17.
//  Copyright © 2018 wiljay. All rights reserved.
//

import UIKit

class SearchViewController: UIViewController, UITableViewDelegate, UITableViewDataSource {
    
    @IBOutlet weak var searchBar: UISearchBar!
    @IBOutlet weak var camperTableView: UITableView!
    
    var campers: [Camper]?
    
    
    override func viewDidLoad() {
        super.viewDidLoad()

        let camper1 = Camper(id: "1", name: "John Doe", allergies: ["peanut","advil"], cabin: "2B", image: UIImage(named: "c1")!)
        let camper2 = Camper(id: "2", name: "Jane Doe", allergies: ["acetaminophen"], cabin: "5G", image: UIImage(named: "c1")!)
        let camper3 = Camper(id: "3", name: "Johnny D", allergies: [""], cabin: "2B", image: UIImage(named: "c1")!)
        let camper4 = Camper(id: "4", name: "Janey D", allergies: [""], cabin: "5G", image: UIImage(named: "c1")!)
        
        self.campers = [camper1,camper2,camper3,camper4]
        
    }
    
    func tableView(_ tableView: UITableView, heightForRowAt indexPath: IndexPath) -> CGFloat {
        return camperTableView.frame.height/4
    }
    
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return (self.campers?.count)!
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: "camperCell") as! CamperViewCell
        cell.configureCell(camper: (campers?[indexPath.row])!)
        
        return cell
    }

}
