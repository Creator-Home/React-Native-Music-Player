import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Homepage from "./src/screens/Homepage";
import Musiclist from "./src/components/musiclist/Musiclist";

export default function App() {
  return (
    <View style={styles.container}>
      <Musiclist />
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
