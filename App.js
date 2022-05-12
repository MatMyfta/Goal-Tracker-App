import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'

import colors from './src/utils/colors';
import Tabs from './src/navigation/tabs'

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <Tabs />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.get("bgColor"),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
