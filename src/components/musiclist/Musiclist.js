import React, { Component } from "react";
import { Text, StyleSheet, View, Image, } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesome } from "@expo/vector-icons";

class Musiclist extends Component {

  render() {
    const { image, navigation } = this.props;
   
    return (
      <View style={styles.container}>
        <View style={styles.card}>
          <View style={styles.card__main}>
            <View style={styles.image__container}>
              <Image
                source={this.props.image}
                style={{
                  height: 100,
                  borderRadius: 50,
                  width: 100,
                  // transform: [{ rotate: spin }],
                }}
              />
            </View>
            <View style={styles.main__details}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Music Player", {
                    title: this.props.title,
                    image: this.props.image,
                    album: this.props.album,
                    uri: this.props.uri,
                    artist: this.props.artist,
                  });
                }}
              >
                <View style={styles.details__one} numberOfLines={1}>
                  <Text style={styles.details__text1}>Album:</Text>
                  <Text style={styles.details__text1}>{this.props.album}</Text>
                </View>
                <View style={styles.details__one} numberOfLines={1}>
                  <Text style={styles.details__text1}>Song:</Text>
                  <Text style={styles.details__text1}>{this.props.title} </Text>
                </View>
                <View style={styles.details__one} numberOfLines={1}>
                  <Text style={styles.details__text1}>Artist:</Text>
                  <Text style={styles.details__text1}>{this.props.artist}</Text>
                </View>
              </TouchableOpacity>
              
            </View>
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
  card__main: {
    flexDirection: "row",
  },
  card: {
    backgroundColor: "#262626",
    marginVertical: 10,
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
    justifyContent: "flex-end",
  },
  icon:{
    marginHorizontal: 30,
  }
});
export default Musiclist;
