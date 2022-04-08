import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import React from "react";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";

const Splash = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading1}>DiGi-Pocket</Text>
      <Text style={styles.heading2}>Easy. Fast. Portable. </Text>
      <Text> </Text>

      <View style={styles.Button}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Signup")}
          style={{ backgroundColor: "#FFFFFF", width: "50", height: "20" }}
        >
          <Text
            style={{
              textAlign: "center",
              color: "#0F4D92",
              fontSize: 24,
              fontFamily: "Comfortaa",
              fontWeight: "700",
            }}
          >
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
      <Text></Text>

      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text style={styles.link}> Already a Member ?</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    height: heightPercentageToDP("100%"),
    width: widthPercentageToDP("100%"),
    backgroundColor: "#0F4D92",
    alignItems: "center",
    justifyContent: "center",
  },

  heading1: {
    color: "#fff",
    fontSize: 60,
    fontFamily: "Comfortaa",
    left: 0,
    top: -40,
  },

  heading2: {
    color: "#fff",
    fontSize: 20,
    fontFamily: "Comfortaa",
    justifyContent: "center",
    alignContent: "center",
    top: -30,
  },

  Button: {
    backgroundColor: "#fff",
    borderRadius: 15,
    width: 313,
    height: 70,
    justifyContent: "center",
    fontSize: 200,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    top: 50,
  },

  link: {
    color: "#fff",
    fontSize: 15,
    top: 100,
    fontSize: 24,
    justifyContent: "center",
    fontFamily: "Comfortaa",
  },
});
