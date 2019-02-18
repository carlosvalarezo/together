import Foundation

@available(iOS 11.0, *)
@objc(TogetherCameraViewManager)
class TogetherCameraViewManager : RCTViewManager {
  
  override func view() -> UIView {
    return TogetherCameraView();
  }
  
}
