import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

const Profile = () => {
  return (
    <View style={styles.container}>
      <Text>CardPay</Text>
      <Button title="OK" onPress={() => alert("Nice")} />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F4D92",
    alignItems: "center",
    justifyContent: "center",
  },
});
