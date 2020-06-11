import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

class Homepage extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.icon__container}>
          <FontAwesome5 name="headphones" size={100} color="white" />
        </View>
        <View style={styles.header__title}>
          <Text style={styles.header__text}>Music Player</Text>
        </View>
        <View style={styles.touch}>
          <TouchableOpacity onPress={() => {
              navigation.navigate("Play List");
            }}style={styles.touch__touch} >
            <Text style={styles.touch__text}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    // justifyContent: "center",
  },
  icon__container: {
    marginVertical: 80,
  },
  header__text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
  header__title: {
    marginTop: 30,
  },
  touch__text:{
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  touch__touch:{
      borderBottomWidth: 10,
      borderBottomColor: '#6800ad'
  },
  touch:{
    marginVertical: 170,
}
});

export default Homepage;
