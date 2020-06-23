import React, { Component } from "react";
import { Text, StyleSheet, View, Image, Animated, Easing } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";

export default class MusicPlayerView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      spinAnim: new Animated.Value(0),
      isPlaying: false,
      playbackInstance: null,
      currentIndex: 0,
      volume: 1.0,
      isBuffering: false,
    };
  }
  componentDidMount() {
    Animated.loop(
      Animated.timing(this.state.spinAnim, {
        toValue: 1,
        duration: 10000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  }
  render() {
    const { route } = this.props;
    const { title, artist, image, uri, album } = route.params;
    const spin = this.state.spinAnim.interpolate({
      inputRange: [0, 1],
      outputRange: ["0deg", "360deg"],
    });
    return (
      <View style={styles.container}>
        <View style={styles.image__container}>
          <Animated.Image
            source={image}
            style={{
              height: 250,
              width: 250,
              margin: 20,
              borderRadius: 125,
              alignSelf: "center",
              transform: [{ rotate: spin }],
            }}
          />
        </View>
        <View style={styles.nav__icons}>
          <TouchableOpacity onPress={() => alert('Not Fully Functional')}>
            <AntDesign name="leftcircle" size={40} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => alert('Not Fully Functional')}>
            {this.state.isPlaying ? (
              <AntDesign name="pause" size={40} color="#fff" />
            ) : (
              <AntDesign name="play" size={40} color="#fff" />
            )}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => alert('Not Fully Functional')}>
            <AntDesign name="rightcircle" size={40} color="#fff" />
          </TouchableOpacity>
        </View>
        <View style={styles.main__details}>
          <Text style={styles.text__details}>{title}</Text>
          <Text style={styles.text__details}>{artist}</Text>
          <Text style={styles.text__details}>{album}</Text>
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
  image__container: {
    marginBottom: 30,
    backgroundColor: "#262626",
  },
  nav__icons: {
    flexDirection: "row",
    marginHorizontal: 37,
    marginVertical: 15,
    justifyContent: "space-between",
  },
  main__details: {
    alignItems: "center",
    marginVertical: 40,
  },
  text__details: {
    color: "#fff",
    fontSize: 20,
    letterSpacing: 2,
    fontWeight: "bold",
  },
});
