# rn-login-sdk

Flutter Module Wrapping for React Native

## Installation

```sh
npm install rn-login-sdk
```

## Integration in React Native

```js
import React from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';
import { openLoginSdk } from 'rn-login-sdk';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Open Flutter Login SDK */}
      <Pressable style={styles.button} onPress={openLoginSdk}>
        <Text style={styles.text}>{'Open Login SDK'}</Text>
      </Pressable>
    </View>
  );
}
```

## Integration for Android

Open android/build.gradle and add below snippet at the end:

```js
allprojects{
    repositories{
        String storageUrl = "https://storage.googleapis.com"
        maven {
            url '../../../flutter_login_sdk/build/host/outputs/repo'
        }
        maven {
            url "$storageUrl/download.flutter.io"
        }
    }
```

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
