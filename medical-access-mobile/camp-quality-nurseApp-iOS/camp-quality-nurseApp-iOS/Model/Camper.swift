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
    var firstName: String
    var lastName: String
    var preferredName: String
    var age: Int
    var gender: String
    var primaryDiagnosis: String
    var secondaryDiagnosis: String
    var birthday: String
    var companion: String
    var companionNotes: String
    var height: String
    var notes: String
    var otcPermitted: Bool
    var allergies: [String]?
    var cabin: String?
    var status: String
    var image: UIImage?
    var weight: String
    
    init(id: String,firstName: String, lastName: String, preferredName: String, age: Int, gender: String, primaryDiagnosis: String, secondaryDiagnosis: String, birthday: String, companion: String, companionNotes: String, height: String, notes: String, otcPremitted: Bool, cabin: String, status: String, weight: String) {
        self.id = id
        self.firstName = firstName
        self.lastName = lastName
        self.preferredName = preferredName
        self.age = age
        self.gender = gender
        self.primaryDiagnosis = primaryDiagnosis
        self.secondaryDiagnosis = secondaryDiagnosis
        self.birthday = birthday
        self.companion = companion
        self.companionNotes = companionNotes
        self.height = height
        self.notes = notes
        self.otcPermitted = otcPremitted
        self.cabin = cabin
        self.status = status
        self.weight = weight
        
    }
    
    
}
