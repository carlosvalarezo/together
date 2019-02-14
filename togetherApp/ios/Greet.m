//
//  Greet.m
//  togetherApp
//
//  Created by carlos-valarezo-loaiza on 2/14/19.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "React/RCTBridgeModule.h"

@interface RCT_EXTERN_MODULE(Greet, NSObject)
RCT_EXTERN_METHOD(greetPeople:(NSString *)person -> (NSString *)value)
@end
