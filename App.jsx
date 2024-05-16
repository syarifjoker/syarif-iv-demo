import NavigatorManager from '@screens/navigator/NavigationManager';
import React from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

function App() {
  return (
    <SafeAreaProvider style={styles.warp}>
      <NavigatorManager />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  warp: {flex: 1},
});

export default App;
