import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  TextInput,
} from "react-native";
import React from "react";
import QR from "./qrscannerprop";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
const QrNfc = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text
          style={{
            fontSize: 30,
            textAlign: "center",
            fontFamily: "Comfortaa",
            color: "#fff",
            top: -130,
          }}
        >
          Scan to Pay
        </Text>

        <Text
          style={{
            fontSize: 16,
            top: -70,
            left: -98,
            fontFamily: "Comfortaa",
            color: "#fff",
          }}
        >
          {" "}
          Please enter the amount:
        </Text>
        <TextInput
          autoCapitalize="none"
          keyboardType="number-pad"
          autoFocus={true}
          style={styles.input}
        />

        <Text
          style={{
            top: -89,
            right: 180,
            fontFamily: "Poppins",
            fontSize: 18,
          }}
        >
          {" "}
          USD
        </Text>

        <View style={styles.card}>
          <QR />
        </View>
      </View>
    </ScrollView>
  );
};

export default QrNfc;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0F4D92",
    height: heightPercentageToDP("100%"),
    alignItems: "center",
    justifyContent: "center",
  },

  card: {
    height: 300,
    width: 300,
    borderWidth: 2,
    bottom: -10,
    borderColor: "#fff",
    borderRadius: 10,
  },

  input: {
    backgroundColor: "#efefefef",
    borderRadius: 8,
    fontSize: 16,
    height: 50,
    top: -50,
    width: 400,
    padding: 10,
    fontFamily: "Comfortaa",
    paddingLeft: 45,
  },
});
