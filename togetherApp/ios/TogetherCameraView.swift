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
class TogetherCameraView: UIView, AVCapturePhotoCaptureDelegate {
  
  var captureSession = AVCaptureSession()
  var stillImageOutput: AVCapturePhotoOutput!
  var videoPreviewLayer = AVCaptureVideoPreviewLayer()
  
  @objc var onTakePicture: RCTDirectEventBlock?
  
  let imageView = UIImageView()
  
  override init(frame: CGRect) {
    super.init(frame: frame)
    
    let windowFrame : CGRect = CGRect(x:0,y:0,width:UIScreen.main.bounds.width,height:UIScreen.main.bounds.height)
    let cameraView : UIView = UIView(frame: windowFrame)
    self.addSubview(cameraView)
    
    createButton()
    createPicturePreview()
    
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
                                               for: .video , position: .front)
    return try! AVCaptureDeviceInput(device: cameraDevice!)
  }
  
  func createButton () {
    let button = UIButton();
    let imageButton = UIImage(named: "giphy.png")
    button.setBackgroundImage(imageButton, for: UIControl.State.normal)
    button.frame = CGRect(x: 350, y: 750, width: 100, height: 100)
    self.addSubview(button)
    button.addTarget(self, action: #selector(takePicture), for: .touchUpInside)
  }
  
  
  func createPicturePreview () {
    imageView.frame = CGRect(x: 355, y: 450, width: 200, height: 100)
    self.addSubview(imageView)    
  }
  
  @objc func takePicture() {
//    print("el boton de la camara...")
    let settings = AVCapturePhotoSettings(format: [AVVideoCodecKey: AVVideoCodecType.jpeg])
    stillImageOutput.capturePhoto(with: settings, delegate: self)
//    onTakePicture!(["picture": "hola"])
    
  }
  
  func photoOutput(_ output: AVCapturePhotoOutput, didFinishProcessingPhoto photo: AVCapturePhoto, error: Error?) {
    
    let imageName = "profilePicture.png"
    guard let imageData = photo.fileDataRepresentation()
      else { return }
    
    let image = UIImage(data: imageData)
    imageView.image = image
    
    let urlPicture = saveImage(imageName)

    if onTakePicture != nil{
      onTakePicture!(["picture":urlPicture])
    }
  }
  
  func saveImage(_ imageName: String) -> String{
    //create an instance of the FileManager
    let fileManager = FileManager.default
    
    //get the image path
    let imagePath = (NSSearchPathForDirectoriesInDomains(.documentDirectory, .userDomainMask, true)[0] as NSString).appendingPathComponent(imageName)
    
    //get the image we took with camera
    let image = imageView.image!
    
    //get the PNG data for this image
    let data = image.pngData()
    
    //store it in the document directory
    
    fileManager.createFile(atPath: imagePath as String, contents: data, attributes: nil)
    print("path of profilepicture...", imagePath)
    
    return imagePath
    
  }
  
  override func didMoveToSuperview(){
    super.didMoveToSuperview()
//    captureSession.stopRunning()
    
  }
    
  @objc func greet(_ person: String) -> String{
    let greeting = "Hello " + person + " from swift, togethercamera..."
    print(greeting)
    return greeting
  }
}
