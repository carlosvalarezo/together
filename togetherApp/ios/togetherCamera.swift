//
//  togetherCamera.swift
//  togetherApp
//
//  Created by carlos-valarezo-loaiza on 2/12/19.
//  Copyright © 2019 Facebook. All rights reserved.
//

import Foundation

@objc(TogetherCamera)
  class TogetherCamera: NSObject {
  
  @objc static func requiresMainQueueSetup() -> Bool {
    return true
  }
  
  @objc func greet() {
    let greeting = "Hello from swift..."
    print(greeting)
  }

  
  
}