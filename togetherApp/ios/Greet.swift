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
  
  func greetPeople(_ person: String) -> String{
    let greeting = "Hello " + person + " from swift..."
    print(greeting)
    return greeting
  }
  
  @objc func getValueFromGreet(_ person: String, callback callback: RCTResponseSenderBlock){
    callback([greetPeople(person)])
  }
}
