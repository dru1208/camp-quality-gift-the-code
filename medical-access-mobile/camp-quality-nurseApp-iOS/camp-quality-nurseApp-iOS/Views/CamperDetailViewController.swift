//
//  CamperDetailViewController.swift
//  camp-quality-nurseApp-iOS
//
//  Created by Wiljay Flores on 2018-11-17.
//  Copyright © 2018 wiljay. All rights reserved.
//

import UIKit

class CamperDetailViewController: UIViewController {
    
    var camper: Camper?

    @IBOutlet weak var showMedicationButton: UIButton!
    @IBOutlet weak var camperimageView: UIImageView!
    @IBOutlet weak var camperNameLabel: UILabel!
    @IBOutlet weak var showMedicationContainerConstraint: NSLayoutConstraint!

    @IBOutlet weak var camperInfoContainer: UIView!

    
    var showMedication = false
    var popupHeight: CGFloat?
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        camperimageView.image = camper?.image
        camperNameLabel.text = camper?.name
        
        camperimageView.layer.masksToBounds = false
        camperimageView.layer.cornerRadius = camperimageView.frame.size.width / 2
        camperimageView.clipsToBounds = true
        camperimageView.contentMode = .scaleToFill
        popupHeight = camperInfoContainer.frame.height

    }
    
    @IBAction func medicationButtonPressed(_ sender: UIButton) {
        if showMedication {
            showMedication = false
            showMedicationContainerConstraint.constant = 0
            showMedicationButton.setTitle("Show Schedule", for: .normal)
        } else {
            showMedication = true
            showMedicationContainerConstraint.constant -= popupHeight!
            showMedicationButton.setTitle("Hide Schedule", for: .normal)
        }
    }
    
}
