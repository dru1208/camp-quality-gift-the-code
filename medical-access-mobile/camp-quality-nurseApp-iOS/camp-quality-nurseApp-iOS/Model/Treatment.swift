//
//  Activity.swift
//  camp-quality-nurseApp-iOS
//
//  Created by Wiljay Flores on 2018-11-17.
//  Copyright © 2018 wiljay. All rights reserved.
//

import UIKit

class Treatment: NSObject  {
    let sessionID: String
    var medication: String
    var time: String
    var date: String
    var beenAdministered: Bool
    var details: String
    var notes: String
    var dosage: String
   
    init(sessionID: String, medication: String, time: String, date: String, beenAdministered: Bool, details: String, notes: String, dosage: String) {
        self.sessionID = sessionID
        self.medication = medication
        self.time = time
        self.date = date
        self.beenAdministered = beenAdministered
        self.details = details
        self.notes = notes
        self.dosage = dosage
    }
}
