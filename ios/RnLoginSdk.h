
#ifdef RCT_NEW_ARCH_ENABLED
#import "RNRnLoginSdkSpec.h"

@interface RnLoginSdk : NSObject <NativeRnLoginSdkSpec>
#else
#import <React/RCTBridgeModule.h>

@interface RnLoginSdk : NSObject <RCTBridgeModule>
#endif

@end
