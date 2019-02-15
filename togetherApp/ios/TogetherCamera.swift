//
//  TogetherCamera.swift
//  togetherApp
//
//  Created by carlos-valarezo-loaiza on 2/14/19.
//  Copyright © 2019 Facebook. All rights reserved.
//

import Foundation

@objc(TogetherCameraViewManager)
class TogetherCameraViewManager: RCTViewManager {
  
  override func view() -> UIView! {
    let label = UILabel()
    label.text = "Swift ui"
    label.textAlignment = .center
    return label
  }
  
  override static func requiresMainQueueSetup() -> Bool {
    return true
  }
  
  @objc func greet(_ person: String) -> String{
    let greeting = "Hello " + person + " from swift, togethercamera..."
    print(greeting)
    return greeting
  }
}
