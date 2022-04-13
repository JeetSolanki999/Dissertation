import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import Walletani from "../Props/walletani";

const Wallet = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          alert("Feature coming soon");
        }}
      >
        <Image
          source={require("../../assets/icons/plus.png")}
          resizeMode="contain"
          style={{
            width: 40,
            height: 40,
            top: 80,
            left: 350,
          }}
        />
      </TouchableOpacity>
      <Text
        style={{
          fontSize: 30,
          fontFamily: "Comfortaa",
          textAlign: "center",
          top: "5%",
          color: "#fff",
        }}
      >
        {" "}
        Wallet{" "}
      </Text>
      <Walletani />
    </View>
  );
};

export default Wallet;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0F4D92",
    height: "100%",
  },
});
