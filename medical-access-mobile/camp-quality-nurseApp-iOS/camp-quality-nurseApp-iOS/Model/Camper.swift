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
    var name: String
    var primaryDiagnosis: String
    var notes: String
    var otcPermitted: Bool
    var allergies: String
    var image: UIImage?
    

    
    init(id: String,firstName: String, lastName: String, primaryDiagnosis: String, notes: String, otcPremitted: Bool, allergies: String) {
        self.id = id
        self.name = firstName + " " + lastName
        self.primaryDiagnosis = primaryDiagnosis
        self.notes = notes
        self.otcPermitted = otcPremitted
        self.allergies = allergies
        
        
        }
    
}
