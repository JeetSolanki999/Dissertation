import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";

export default function qrscanner() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data, amount }) => {
    setScanned(true);
    alert(`Amount of AED 100 has been paid to ${data}`);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && (
        <TouchableOpacity
          onPress={() => setScanned(false)}
          style={styles.button}
        >
          <Image
            source={require("../../assets/icons/qr-code-scan.png")}
            style={{
              width: 29,
              height: 28,
              left: 5,
              top: 16,
            }}
          />
          <Text style={styles.text}> Rescan </Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: heightPercentageToDP("30%"),
    width: widthPercentageToDP("65%"),
    left: 9,
    top: 9,
  },

  text: {
    fontSize: 20,
    textAlign: "center",
    fontFamily: "Poppins",
    color: "#0F4D92",
    top: -13,
    left: 10,
  },

  button: {
    left: 60,
    borderRadius: 10,
    bottom: -310,
    width: "60%",
    height: "19%",
    backgroundColor: "#fff",
    padding: 10,
    justifyContent: "center",
  },
});
