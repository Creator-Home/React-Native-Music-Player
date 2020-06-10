import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Homepage from './src/screens/Homepage';

export default function App() {
  return (
    <View style={styles.container}>
     <Homepage/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#000',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});