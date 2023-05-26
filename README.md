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
import { openDigipass } from 'rn-login-sdk';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Open Flutter Login SDK */}
      <Pressable style={styles.button} onPress={openDigipass}>
        <Text style={styles.text}>{'Open Login SDK'}</Text>
      </Pressable>
    </View>
  );
}

```

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
