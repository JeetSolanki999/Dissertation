import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-gesture-handler";
import { Input } from "react-native-elements";
import PasswordInputText from "react-native-hide-show-password-input";

const Signup = ({ navigation }) => {
  return (
    <View style={styles.bg}>
      <Text> Hello</Text>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  bg: {
    height: 490,
    width: 450,
    backgroundColor: "#0F4D92",
  },
});
