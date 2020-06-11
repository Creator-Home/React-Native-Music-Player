import React, { Component } from "react";
import { Text, StyleSheet, View, Image, Animated, Easing } from "react-native";
import image from "../../images/image.jpg";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesome } from "@expo/vector-icons";

class Musiclist extends Component {
  //   constructor(props) {
  //     super(props);

  //     this.state = {
  //       spinAnim: new Animated.Value(0),
  //     };
  //   }
  //   componentDidMount() {
  //     Animated.loop(
  //       Animated.timing(this.state.spinAnim, {
  //         toValue: 1,
  //         duration: 3000,
  //         easing: Easing.linear,
  //         useNativeDriver: true,
  //       })
  //     ).start();
  //   }
  render() {
    // const spin = this.state.spinAnim.interpolate({
    //   inputRange: [0, 1],
    //   outputRange: ["0deg", "360deg"],
    // });
    return (
      <View style={styles.container}>
        <View style={styles.card}>
          <View style={styles.image__container}>
            <Animated.Image
              source={image}
              style={{
                height: 100,
                borderRadius: 50,
                width: 100,
                // transform: [{ rotate: spin }],
              }}
            />
          </View>
          <View style={styles.main__details}>
            <View style={styles.details__one} numberOfLines={1}>
              <Text style={styles.details__text1}>Album:</Text>
              <Text style={styles.details__text1}>The Greatest Hits</Text>
            </View>
            <View style={styles.details__one} numberOfLines={1}>
              <Text style={styles.details__text1}>Song:</Text>
              <Text style={styles.details__text1}>We are the world </Text>
            </View>
            <View style={styles.details__one} numberOfLines={1}>
              <Text style={styles.details__text1}>Artist:</Text>
              <Text style={styles.details__text1}>
                Michael Jackson ft{" "}
              </Text>
            </View>
            <View style={styles.icons}>
              <TouchableOpacity>
                <FontAwesome
                  name="share-alt"
                  size={24}
                  color="#fff"
                  style={styles.icon}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <FontAwesome
                  name="play"
                  size={24}
                  color="#fff"
                  style={styles.icon}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    flex: 1,
  },
  card: {
    backgroundColor: "#262626",
    marginVertical: 70,
    flexDirection: "row",
    elevation: 20,
    borderRadius: 15,
  },
  image__container: {
    padding: 10,
  },
  details__text1: {
    color: "#fff",
    fontSize: 15,
    letterSpacing: 1,
  },
  main__details: {
    margin: 10,
  },
  details__one: {
    flexDirection: "row",
    marginBottom: 5,
  },
  icons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
export default Musiclist;
