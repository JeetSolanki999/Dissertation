import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";

const Settings = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("Tabs")}>
        <Image
          source={require("../assets/WhiteArrow_Icon.png")}
          resizeMode="contain"
          style={{
            width: 29,
            height: 28,
            bottom: 130,
            left: -170,
          }}
        />

        <View>
          <Text> Settings </Text>
        </View>
      </TouchableOpacity>
      <View>
        <Image
          source={require("../assets/settingsuser.png")}
          style={styles.image}
        />
        <Image
          source={require("../assets/Notifications.png")}
          style={styles.image}
        />
        <Image
          source={require("../assets/accessibility.png")}
          style={styles.image}
        />
        <Image source={require("../assets/Help.png")} style={styles.image} />

        <Image source={require("../assets/tandc.png")} style={styles.image} />
      </View>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F4D92",
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    width: 45,
    height: 45,
    margin: " 5%",
    bottom: 40,
    left: -140,
  },
});
