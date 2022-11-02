#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(NotificationsUtils, NSObject)

RCT_EXTERN_METHOD(openAppNotificationsSettings)

+ (BOOL)requiresMainQueueSetup
{
  return NO;
}

@end
