//
//  TogetherCameraViewManager.m
//  togetherApp
//
//  Created by carlos-valarezo-loaiza on 2/15/19.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <React/RCTViewManager.h>
#import <React/RCTEventEmitter.h>



@interface RCT_EXTERN_MODULE(TogetherCameraViewManager, UIView)
RCT_EXPORT_VIEW_PROPERTY(onTakePicture, RCTDirectEventBlock)
RCT_EXTERN_METHOD(getPicture:(RCTResponseSenderBlock) callback)
@end
