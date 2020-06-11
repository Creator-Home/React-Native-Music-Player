import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MusicPlayerView from "./src/screens/MusicPlayerView";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Homepage from "./src/screens/Homepage";
import MusicListView from "./src/screens/MusicListView";

const Stack = createStackNavigator();

export default function App() {
  return (
   
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerTitle: null,
            headerStyle: { height: 0 },
          }}
          name="Home"
          component={Homepage}
        />
        <Stack.Screen
          options={{
            title: "Playlist",
            headerTintColor: "#fff",
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 30,
            },
            headerStyle: {
              backgroundColor: "#6800ad",
              height: 100,
            },
          }}
          name="Play List"
          component={MusicListView}
        />
        <Stack.Screen options={{
            title: "Music Player",
            headerTintColor: "#fff",
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 30,
            },
            headerStyle: {
              backgroundColor: "#6800ad",
              height: 100,
            },
          }} name="Music Player" component={MusicPlayerView} />
      </Stack.Navigator>
    </NavigationContainer>
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
