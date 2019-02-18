//
//  TogetherCameraView.swift
//  togetherApp
//
//  Created by carlos-valarezo-loaiza on 2/18/19.
//  Copyright © 2019 Facebook. All rights reserved.
//

import Foundation
import AVFoundation
import UIKit

@objc(TogetherCameraView)
class TogetherCameraView: UIView {
  
  var captureSession = AVCaptureSession()
  var stillImageOutput: AVCapturePhotoOutput!
  var videoPreviewLayer = AVCaptureVideoPreviewLayer()
  
  
  override init(frame: CGRect) {
    super.init(frame: frame)
    
    let windowFrame : CGRect = CGRect(x:0,y:0,width:UIScreen.main.bounds.width,height:UIScreen.main.bounds.height)
    let cameraView : UIView = UIView(frame: windowFrame)
    self.addSubview(cameraView)
    
    captureSession = AVCaptureSession()
    captureSession.sessionPreset = .medium
    
    
    let captureDevice = getDevice()
    stillImageOutput = AVCapturePhotoOutput()
    
    if captureSession.canAddInput(captureDevice) && captureSession.canAddOutput(stillImageOutput) {
      captureSession.addInput(captureDevice)
      captureSession.addOutput(stillImageOutput)
      
      videoPreviewLayer = AVCaptureVideoPreviewLayer(session: captureSession)
      
      videoPreviewLayer.videoGravity = .resizeAspect
      videoPreviewLayer.connection?.videoOrientation = .portrait
      cameraView.layer.addSublayer(videoPreviewLayer)
      DispatchQueue.global(qos: .userInitiated).async {
        self.captureSession.startRunning()
        DispatchQueue.main.async {
          self.videoPreviewLayer.frame = cameraView.bounds
        }
      }
    }
  }
  
  required init?(coder aDecoder: NSCoder) {
    super.init(coder: aDecoder)
  }
  
  func getDevice() -> AVCaptureDeviceInput {
    let cameraDevice = AVCaptureDevice.default(.builtInWideAngleCamera,
                                               for: .video, position: .front)
    return try! AVCaptureDeviceInput(device: cameraDevice!)
  }
  
  @objc
  static func requiresMainQueueSetup() -> Bool {
    return true
  }
  
  @objc func greet(_ person: String) -> String{
    let greeting = "Hello " + person + " from swift, togethercamera..."
    print(greeting)
    return greeting
  }
}
