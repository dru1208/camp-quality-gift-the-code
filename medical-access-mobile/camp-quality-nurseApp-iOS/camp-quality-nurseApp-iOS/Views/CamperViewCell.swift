//
//  CamperViewCell.swift
//  camp-quality-nurseApp-iOS
//
//  Created by Wiljay Flores on 2018-11-17.
//  Copyright © 2018 wiljay. All rights reserved.
//

import UIKit

class CamperViewCell: UITableViewCell {
    
    @IBOutlet weak var camperNameLabel: UILabel!
    @IBOutlet weak var camperImage: UIImageView!
    
    var camper: Camper?

    override func awakeFromNib() {
        super.awakeFromNib()
        // Initialization code
    }

    override func setSelected(_ selected: Bool, animated: Bool) {
        super.setSelected(selected, animated: animated)

        // Configure the view for the selected state
    }
    
    func configureCell(camper: Camper) {
        self.camper = camper
        camperNameLabel.text = self.camper?.name
        camperImage.image = self.camper?.image
        camperImage.image?
    }

}
