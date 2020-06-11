import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList } from "react-native-gesture-handler";
import Musiclist from '../components/musiclist/Musiclist'

class MusicListView extends Component {
  Musiclist = [
    {
      id: "1",
      uri:
        "http://188.138.57.224/tb/a/5d/kendyle_paige_me_myself_i_lyrics_g-eazy_the_four_mp3_49267.mp3?play",
      artist: "Kendyle Paige",
      image: require("../images/kendyle.jpg"),
      album: "Bless Up",
      title: "Me, Myself and I",
    },
    {
      id: "2",
      uri:
        "http://62.138.24.205/tb/c/48/noah_barlass_sings_who_you_are_the_four_season_2_ep._5_s2e5_mp3_50032.mp3?play",
      artist: "Noah Barless",
      image: require("../images/noah.jpg"),
      album: "The come back",
      title: "Who you are",
    },
    {
      id: "3",
      uri:
        "http://62.138.24.205/tb/c/48/noah_barlass_sings_who_you_are_the_four_season_2_ep._5_s2e5_mp3_50032.mp3?play",
      artist: "Tim Johnson Jr.",
      image: require("../images/tim.jpg"),
      album: "Greatest Hits",
      title: "Earned It",
    },
    {
      id: "4",
      uri:
        "http://62.138.24.213/tb/f/f1/dylan_jacob_raps_a_milli_comeback_challenge_performance_the_four_season_2_ep._7_s2e7_mp3_50503.mp3?play",
      artist: "Dylan Jacobs",
      image: require("../images/dylan.jpg"),
      album: "Kamakazi",
      title: "A milli",
    },
    {
      id: "5",
      uri:
        "https://d274.cdn-me.net/tb/4/4d/joyner_lucas_will_adhd_mp3_50769.mp3?play",
      artist: "Joyner Lucas",
      image: require("../images/joyner.jpg"),
      album: "A.D.H.D",
      title: "Will",
    },
    {
      id: "6",
      uri:
        "https://d274.cdn-me.net/tb/7/9d/eminem_godzilla_ft._juice_wrld_dir._by_colebennett_mp3_51151.mp3?play",
      artist: "Eminem",
      image: require("../images/eminem.jpg"),
      album: "Kamakazi",
      title: "Monster",
    },
  ];
  render() {
    const { navigation } = this.props
    return (
    //   <SafeAreaView>
        <FlatList
          data={this.Musiclist}
          renderItem={({ item }) => {
            return (
              <Musiclist
                title={item.title}
                album={item.album}
                image={item.image}
                uri={item.uri}
                artist={item.artist}
                navigation={navigation}
              />
            );
          }}
          keyExtractor={(item) => item.id}
        />
    //   </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({});
export default MusicListView;
