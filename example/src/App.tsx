import React, { useState } from 'react';

import { StyleSheet, View, Text, Pressable } from 'react-native';
import { openDigipass } from 'rn-login-sdk';

export default function App() {
  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={openDigipass}>
        <Text style={styles.text}>{'Open Login SDK'}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    marginHorizontal: 20,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#1abc9c',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});
