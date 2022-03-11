import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Button,
} from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-gesture-handler";
import { KeyboardAvoidingView } from "react-native";
import Splash from "./Splash";
import * as Haptics from "expo-haptics";

const Login = ({ navigation }) => {
  const [isSecureEntry, setIsSecureEntry] = useState(true);
  return (
    <View style={styles.bg}>
      <Button title="Success" onPress={() => navigation.navigate("Splash")}>
        <Image
          source={require("../assets/WhiteArrow_Icon.png")}
          resizeMode="contain"
          style={{
            width: 29,
            height: 28,
            top: 90,
            left: 10,
          }}
        />
      </Button>

      <Text style={styles.login}>Login</Text>
      <Text style={styles.welcome}>Welcome Back 😁</Text>

      <View style={styles.card}>
        <Text style={styles.text}> Email </Text>
        <Text style={styles.text}> Password </Text>

        <TextInput
          style={{
            marginTop: 40,
            width: 332,
            height: 43,
            borderRadius: 5,
            backgroundColor: "#EAEAED",
            paddingLeft: 10,
            left: 15,
            bottom: 190,
          }}
          placeholder="Enter your e-mail"
          errorStyle={{ color: "red" }}
          errorMessage="ENTER A VALID ERROR HERE"
        />
        <View style={styles.pic}>
          <Image
            source={require("../assets/email.png")}
            resizeMode="contain"
            style={{
              width: 29,
              height: 28,
              top: 90,
              left: 10,
            }}
          />
        </View>

        <TextInput
          style={{
            marginTop: 40,
            width: 332,
            height: 43,
            borderRadius: 5,
            backgroundColor: "#EAEAED",
            paddingLeft: 10,
            left: 15,
            bottom: 180,
          }}
          placeholder="Enter your Password"
          secureTextEntry={isSecureEntry}
          icon={
            <TouchableOpacity
              onPress={() => {
                setIsSecureEntry((prev) => !prev);
              }}
            >
              <Text>
                {isSecureEntry
                  ? require("../assets/show.png")
                  : require("../assets/hide.png")}
              </Text>
            </TouchableOpacity>
          }
        />

        <TouchableOpacity onPress={() => navigation.navigate("ForgotPassword")}>
          <Text
            style={{ left: 220, bottom: 120, color: "#0F4D92", fontSize: 15 }}
          >
            Forgot Password ?
          </Text>
        </TouchableOpacity>

        <View style={styles.Button}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Tabs")}
            onPressOut={() =>
              Haptics.notificationAsync(
                Haptics.NotificationFeedbackType.Success
              )
            }
          >
            <Text style={{ textAlign: "center", color: "#fff", fontSize: 24 }}>
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          marginTop: -5,
          justifyContent: "space-evenly",
          left: -4,
        }}
      >
        <TouchableOpacity onPress={() => alert("Go to Google")}>
          <Image
            source={require("../assets/Google_Icon.png")}
            style={{
              width: 30,
              height: 30,
              top: 235,
              borderRadius: 15,
              shadowOffset: {
                width: 0,
                height: 10,
              },
              shadowOpacity: 0.25,
              shadowRadius: 4,
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => alert("Go to Facebook")}>
          <Image
            source={require("../assets/facebook.png")}
            style={{
              width: 35,
              height: 35,
              top: 230,
              borderRadius: 15,
              shadowOffset: {
                width: 0,
                height: 10,
              },
              shadowOpacity: 0.25,
              shadowRadius: 4,
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => alert("Go to Apple")}>
          <Image
            source={require("../assets/Apple_Icon.png")}
            style={{
              width: 32,
              height: 32,
              top: 230,
              borderRadius: 10,
              shadowOffset: {
                width: 0,
                height: 10,
              },
              shadowOpacity: 0.25,
              shadowRadius: 4,
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

{
  /* <Image
          source={require("../assets/WhiteArrow_Icon.png")}
          resizeMode="contain"
          style={{
            width: 29,
            height: 28,
            top: 90,
            left: 10,
          }}
        /> */
}

export default Login;

const styles = StyleSheet.create({
  bg: {
    height: 490,
    width: 450,
    backgroundColor: "#0F4D92",
  },

  Button: {
    backgroundColor: "#0F4D92",
    display: "flex",
    borderRadius: 15,
    width: 313,
    height: 70,
    justifyContent: "center",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    bottom: 80,
    left: 25,
  },

  login: {
    textAlign: "center",
    top: 115,
    color: "#fff",
    fontSize: 30,
    left: -9,
  },

  welcome: {
    textAlign: "center",
    color: "#fff",
    fontSize: 15,
    top: 125,
    left: -5,
  },

  card: {
    height: 486,
    width: 363,
    backgroundColor: "#fff",
    borderRadius: 15,
    right: -33,
    top: 160,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
  },

  text: {
    justifyContent: "center",
    fontSize: 15,
    lineHeight: 120,
    left: 15,
  },

  pic: {
    flexDirection: "row",
    bottom: 314,
    left: 300,
  },
});
