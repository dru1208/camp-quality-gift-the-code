//
//  TreatmentViewCell.swift
//  camp-quality-nurseApp-iOS
//
//  Created by Wiljay Flores on 2018-11-18.
//  Copyright © 2018 wiljay. All rights reserved.
//

import UIKit

class TreatmentViewCell: UITableViewCell {
    
    @IBOutlet weak var timeLabel: UILabel!
    @IBOutlet weak var treatmentLabel: UILabel!
    @IBOutlet weak var beenAdministeredLabel: UILabel!
    
    var treatment: Treatment?
    
    func configureCell(treatment: Treatment) {
        self.treatment = treatment
        timeLabel.text = treatment.time
        treatmentLabel.text = treatment.medication
        
        if treatment.beenAdministered {
            beenAdministeredLabel.text = "✅"
        } else {
            beenAdministeredLabel.text = " "
        }
    }
}
