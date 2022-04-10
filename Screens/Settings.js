import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
  Switch,
} from "react-native";
import React, { useState } from "react";
import { auth } from "../firebase";

const Settings = ({ navigation }) => {
  const [isEnabled, setIsEnabled] = useState(false);

  const logOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Splash");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.settings}> Settings </Text>
      </View>

      <View>
        <TouchableOpacity onPress={() => navigation.navigate("UpdateProfile")}>
          <Text style={styles.text}> Account Settings</Text>
        </TouchableOpacity>
        <View style={styles.line}></View>
        <Image
          source={require("../assets/settingsuser.png")}
          style={styles.image}
        />
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.text}> Notifications</Text>
          <Switch
            value={isEnabled}
            onValueChange={() => setIsEnabled(!isEnabled)}
            trackColor={{ false: "#767577", true: "#05A605" }}
            style={{
              left: 89,
              top: -10,
              borderWidth: 0.5,
              borderColor: "#ffffff",
              borderRadius: 15,
            }}
          />
        </View>
        <View style={styles.line}></View>

        <Image
          source={require("../assets/Notifications.png")}
          style={styles.image}
        />

        <Text style={styles.text}> Accessibility Settings </Text>
        <View style={styles.line}></View>
        <Image
          source={require("../assets/accessibility.png")}
          style={styles.image}
        />

        <TouchableOpacity
          onPress={() => navigation.navigate("Helpandfeedback")}
        >
          <Text style={styles.text}> Help and Feedback </Text>
        </TouchableOpacity>
        <View style={styles.line}></View>
        <Image source={require("../assets/Help.png")} style={styles.image} />

        <TouchableOpacity onPress={() => navigation.navigate("TandC")}>
          <Text style={styles.text}> Terms and Conditions</Text>
        </TouchableOpacity>
        <View style={styles.line}></View>
        <Image source={require("../assets/tandc.png")} style={styles.image} />
      </View>

      <View style={styles.Button}>
        <TouchableOpacity onPress={() => logOut()}>
          <Text
            style={{
              textAlign: "center",
              color: "#0F4D92",
              fontSize: 24,
              fontFamily: "Comfortaa",
            }}
          >
            Log Out
          </Text>
        </TouchableOpacity>
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

  line: {
    height: 2,
    width: 300,
    borderRadius: 10,
    backgroundColor: "#fff",
    top: 5,
    left: 15,
  },

  settings: {
    textAlign: "center",
    top: -70,
    color: "#fff",
    fontSize: 30,
    fontFamily: "Comfortaa",
  },

  text: {
    fontSize: 25,
    color: "#fff",
    left: 20,
    bottom: 10,
    fontFamily: "Comfortaa",
  },

  Button: {
    backgroundColor: "#fff",
    borderRadius: 15,

    width: 313,
    height: 70,
    justifyContent: "center",
    fontSize: 200,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    top: -10,
  },

  image: {
    width: 40,
    height: 40,
    margin: " 3%",
    bottom: 60,
    left: -40,
  },
});
