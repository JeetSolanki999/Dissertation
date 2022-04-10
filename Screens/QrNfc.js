import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import QR from "./qrscannerprop";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
const QrNfc = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.scanner}>
          <QR />
        </View>
      </View>
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

  card: {
    height: heightPercentageToDP("60%"),
    width: widthPercentageToDP("90%"),
    backgroundColor: "#fff",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },

  scanner: {
    height: 800,
    width: 500,
    left: 125,
    alignContent: "center",
    justifyContent: "center",
  },
});
