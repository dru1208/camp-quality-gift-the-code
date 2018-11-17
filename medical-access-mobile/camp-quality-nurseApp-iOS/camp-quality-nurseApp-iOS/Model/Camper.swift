//
//  Camper.swift
//  camp-quality-nurseApp-iOS
//
//  Created by Wiljay Flores on 2018-11-17.
//  Copyright © 2018 wiljay. All rights reserved.
//

import UIKit

class Camper: NSObject {
    
    let id: String
    let name: String
    let allergies: [String]
    var cabin: String?
    var image: UIImage?
    
    init(id: String,name: String,allergies: [String],cabin: String,image: UIImage) {
        self.id = id
        self.name = name
        self.allergies = allergies
        self.cabin = cabin
        self.image = image
    }
    
    
}
