import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

const QrNfc = () => {
  return (
    <View style={styles.container}>
      <Text>This is QR/NFC </Text>
      <Button title="OK" onPress={() => alert("Nice")} />
    </View>
  );
};

export default QrNfc;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F4D92",
    alignItems: "center",
    justifyContent: "center",
  },
});
