//
//  TreatmentDetailViewController.swift
//  camp-quality-nurseApp-iOS
//
//  Created by Wiljay Flores on 2018-11-18.
//  Copyright © 2018 wiljay. All rights reserved.
//

import UIKit
import FirebaseDatabase

class TreatmentDetailViewController: UIViewController {
    var treatment: Treatment?
    var camperID: String?
    
    @IBOutlet weak var treatmentLabel: UILabel!
    @IBOutlet weak var updateButton: UIButton!
    var database = DatabaseReference()
    
    override func viewDidLoad() {
        database = Database.database().reference()
        treatmentLabel.text = treatment?.medication
        updateButton.layer.cornerRadius = 5
        
        
        if (treatment?.beenAdministered)! {
            updateButton.setTitle("Administered!", for: .normal)
        } else {
            updateButton.setTitle("Press To update", for: .normal)
        }
    }
    
    @IBAction func updatePressed(_ sender: UIButton) {
        
        if (treatment?.beenAdministered)! {
            updateButton.setTitle("Press To Update", for: .normal)
            database.child("treatment").child("\(camperID ?? "")/\(treatment?.sessionID ?? "")").updateChildValues(["beenAdministered": false])
            treatment?.beenAdministered = false
        } else {
            updateButton.setTitle("Administered!", for: .normal)
            database.child("treatment").child("\(camperID ?? "")/\(treatment?.sessionID ?? "")").updateChildValues(["beenAdministered": true])
            treatment?.beenAdministered = true
        
        }
    }
    
}
