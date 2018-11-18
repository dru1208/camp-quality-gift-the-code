//
//  FirebaseManager.swift
//  camp-quality-nurseApp-iOS
//
//  Created by Wiljay Flores on 2018-11-18.
//  Copyright © 2018 wiljay. All rights reserved.
//

import UIKit
import FirebaseDatabase

class FirebaseManager: NSObject {
    
    private override init() {}
    
    static let shared = FirebaseManager()
    let reference = Database.database().reference()
    
}
