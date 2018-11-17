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

    @IBOutlet weak var camperimageView: UIImageView!
    @IBOutlet weak var camperNameLabel: UILabel!
    
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        camperimageView.image = camper?.image
        camperNameLabel.text = camper?.name
        
        camperimageView.layer.masksToBounds = false
        camperimageView.layer.cornerRadius = camperimageView.frame.size.width / 2
        camperimageView.clipsToBounds = true
        camperimageView.contentMode = .scaleToFill
        

    }
    

}
