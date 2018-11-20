//
//  CamperViewCell.swift
//  camp-quality-nurseApp-iOS
//
//  Created by Wiljay Flores on 2018-11-17.
//  Copyright © 2018 wiljay. All rights reserved.
//

import UIKit
import FirebaseStorage


class CamperViewCell: UITableViewCell {
    
    @IBOutlet weak var camperNameLabel: UILabel!
    @IBOutlet weak var camperImage: UIImageView!
    
    @IBOutlet weak var uiContainer: UIView!
    var camper: Camper?
    let storageRef = Storage.storage().reference()

    
    func configureCell(camper: Camper) {
        
        uiContainer.layer.cornerRadius = 5
        self.camper = camper
        camperNameLabel.text = camper.name
        camperImage.layer.cornerRadius = 5
        camperImage.layer.borderWidth = 3
        camperImage.layer.borderColor = UIColor.white.cgColor
        camperImage.clipsToBounds = true
        
        let imageRef = storageRef.child("images/profile_\(camper.id).jpg")
        
        imageRef.getData(maxSize: 1 * 1024 * 1024) { data, error in
            if let error = error {
                print(error)
            } else {
                let image = UIImage(data: data!)
                self.camperImage.image = image
                self.camper?.image = image
            }
    
     }
    }
}
