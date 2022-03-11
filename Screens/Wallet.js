import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import Tabs from "../Navigation/navbar";

const Wallet = () => {
  return (
    <View style={styles.container}>
      <Text>Wallet</Text>
      <Button title="OK" onPress={() => alert("Nice")} />
    </View>
  );
};

export default Wallet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F4D92",
    alignItems: "center",
    justifyContent: "center",
  },
});
