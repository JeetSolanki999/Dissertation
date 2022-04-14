import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import React from "react";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import { auth } from "../../Server/firebase";

const Splash = ({ navigation }) => {
  const loginChecker = () => {
    let user = auth.currentUser;
    if (user) {
      navigation.replace("Tabs");
    } else {
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading1}>DiGi-Pocket</Text>
      <Text style={styles.heading2}>Easy. Fast. Portable. </Text>
      <Text> </Text>

      <TouchableOpacity
        onPress={() => navigation.navigate("Signup")}
        style={styles.Button}
      >
        <Text
          style={{
            textAlign: "center",
            color: "#0F4D92",
            fontSize: 24,
            fontFamily: "Comfortaa",
          }}
        >
          Get Started
        </Text>
      </TouchableOpacity>

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
    width: widthPercentageToDP("70%"),
    padding: 20,
    justifyContent: "center",
    shadowOffset: {
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    top: 60,
  },

  link: {
    color: "#fff",
    fontSize: 15,
    top: 100,
    fontSize: 24,
    justifyContent: "center",
    fontFamily: "Comfortaa",
    borderWidth: 1,
    padding: 20,
    borderRadius: 15,
    borderColor: "#fff",
  },
});
