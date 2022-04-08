import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import Rating from "./Rating";

const Helpandfeedback = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
        <Image
          source={require("../assets/WhiteArrow_Icon.png")}
          resizeMode="contain"
          style={{ height: 29, width: 28, top: 80, right: 150 }}
        />
      </TouchableOpacity>

      <Text style={styles.h1}> Help and Feedback </Text>
      <View style={styles.star}>
        <Rating rating={3} />
      </View>
    </View>
  );
};

export default Helpandfeedback;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: "center",
    backgroundColor: "#0F4D92",
  },

  h1: {
    fontSize: 30,
    fontFamily: "Comfortaa",
    color: "#fff",
    alignItems: "center",
    top: 150,
  },

  star: {
    alignContent: "center",
    justifyContent: "center",
    top: 700,
    left: 0,
  },
});
