//
//  Greet.swift
//  togetherApp
//
//  Created by carlos-valarezo-loaiza on 2/14/19.
//  Copyright © 2019 Facebook. All rights reserved.
//

import Foundation

@objc(Greet)
class Greet: NSObject {
  
  @objc static func requiresMainQueueSetup() -> Bool {
    return true
  }
  
  @objc func greetPeople(_ person: String) -> String{
    let greeting = "Hello " + person + " from swift..."
    print(greeting)
    return greeting
  }
}
