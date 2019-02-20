//
//  TogetherApi.m
//  togetherApp
//
//  Created by carlos-valarezo-loaiza on 2/19/19.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(TogetherApi, NSObject)
RCT_EXTERN_METHOD(registerUser: (NSDictionary *)data callback:(RCTResponseSenderBlock)callback)
@end
