import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

const CardPay = () => {
  return (
    <View style={styles.container}>
      <Text>Nice</Text>
      <Button title="OK" onPress={() => alert("Nice")} />
    </View>
  );
};

export default CardPay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F4D92",
    alignItems: "center",
    justifyContent: "center",
  },
});
