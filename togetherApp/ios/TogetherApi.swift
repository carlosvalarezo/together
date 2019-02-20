//
//  TogetherApi.swift
//  togetherApp
//
//  Created by carlos-valarezo-loaiza on 2/19/19.
//  Copyright © 2019 Facebook. All rights reserved.
//

import Foundation

@objc(TogetherApi)
class TogetherApi: NSObject {
  
  @objc static func requiresMainQueueSetup() -> Bool {
    return true
  }
  
  func greetPeople(_ person: String) -> String{
    let greeting = "Hello " + person + " from swift..."
    print(greeting)
    return greeting
  }
  
  @objc func registerUser(_ data: NSDictionary, callback callback: RCTResponseSenderBlock){
    print(data)
    callback([data])
  }
}

