import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Button,
  ScrollView,
} from "react-native";
import React, { useState } from "react";

const Helpandfeedback = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
        <Image
          source={require("../assets/WhiteArrow_Icon.png")}
          resizeMode="contain"
          style={styles.arrow}
        />
      </TouchableOpacity>
      <View>
        <Text style={styles.hf}> Help and Feedback </Text>

        <View style={styles.card}>
          <Text>Hi there, </Text>
          <Text>
            {" "}
            This is my first phone based application. I would love to hear your
            feedback!😊 You can contact through mail or send message via the
            feedback form. Thanks JS.{" "}
          </Text>

          <Text style={styles.sty}> Hello</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Helpandfeedback;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0F4D92",
  },

  arrow: {
    width: 29,
    bottom: 150,
    left: 10,
  },

  hf: {
    textAlign: "center",
    top: -370,
    color: "#fff",
    fontSize: 30,
  },

  card: {
    height: 510,
    width: 363,
    backgroundColor: "#fff",
    borderRadius: 15,
    right: -33,
    top: -310,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
  },

  sty: {
    color: "#000",
  },
});
