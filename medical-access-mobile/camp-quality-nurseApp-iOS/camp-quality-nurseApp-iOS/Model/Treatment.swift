//
//  Activity.swift
//  camp-quality-nurseApp-iOS
//
//  Created by Wiljay Flores on 2018-11-17.
//  Copyright © 2018 wiljay. All rights reserved.
//

import UIKit

class Treatment: NSObject {
    var name: String
    var time: String
    var isCompleted: Bool
    var details: String
    var notes: String
    
    init(name: String, time: String, details: String, notes: String, isCompleted: Bool) {
        self.name = name
        self.time = time
        self.details = details
        self.notes = notes
        self.isCompleted = isCompleted
    }
}
