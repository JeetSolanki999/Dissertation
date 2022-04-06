import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-gesture-handler";
import { KeyboardAvoidingView } from "react-native";
import Splash from "./Splash";
import * as Haptics from "expo-haptics";
import { ScaledSheet } from "react-native-size-matters";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";

const Login = ({ navigation }) => {
  const [isSecureEntry, setIsSecureEntry] = useState(true);
  return (
    <ScrollView>
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}
      >
        <View style={styles.bg}>
          <TouchableOpacity onPress={() => navigation.navigate("Splash")}>
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
          </TouchableOpacity>

          <Text style={styles.login}>Login</Text>
          <Text style={styles.welcome}>Welcome Back 😁</Text>

          <View style={styles.card}>
            <Text style={styles.text}> Email </Text>
            <Text style={styles.text}> Password </Text>

            <TextInput
              style={{
                marginTop: 40,
                width: widthPercentageToDP("83%"),
                height: heightPercentageToDP("5%"),
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
                  top: 87,
                  left: 35,
                }}
              />
            </View>

            <TextInput
              style={{
                marginTop: 40,
                width: widthPercentageToDP("83%"),
                height: heightPercentageToDP("5%"),
                borderRadius: 5,
                backgroundColor: "#EAEAED",
                paddingLeft: 10,
                left: 15,
                bottom: 180,
              }}
              placeholder="Enter your Password"
              secureTextEntry={isSecureEntry}
            />
            <TouchableOpacity
              onPress={() => {
                setIsSecureEntry((prev) => !prev);
              }}
            >
              {isSecureEntry ? (
                <Image
                  source={require("../assets/show.png")}
                  style={{ height: 25, width: 25, bottom: 215, left: 335 }}
                />
              ) : (
                <Image
                  source={require("../assets/hide.png")}
                  style={{ height: 25, width: 25, bottom: 215, left: 335 }}
                />
              )}
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate("ForgotPassword")}
            >
              <Text
                style={{
                  left: 240,
                  top: -170,
                  color: "#0F4D92",
                  fontSize: 15,

                  fontStyle: "italic",
                }}
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
                <Text
                  style={{
                    textAlign: "center",
                    color: "#fff",
                    fontSize: 24,
                    fontWeight: "bold",
                  }}
                >
                  Login
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              left: -10,
            }}
          >
            <TouchableOpacity>
              <View style={styles.belowbtn}>
                <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                  {" "}
                  Sign in with{" "}
                </Text>
                <Image
                  style={{ height: 25, width: 25, marginLeft: 10 }}
                  source={require("../assets/Google_Icon.png")}
                />
              </View>
            </TouchableOpacity>
            <View style={{ width: 10 }}></View>
            <TouchableOpacity>
              <View style={styles.belowbtn}>
                <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                  {" "}
                  Sign in with{" "}
                </Text>
                <Image
                  style={{ height: 25, width: 25, marginLeft: 5 }}
                  source={require("../assets/facebook.png")}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  bg: {
    height: heightPercentageToDP("50%"),
    width: widthPercentageToDP("100%"),
    backgroundColor: "#0F4D92",
  },

  Button: {
    backgroundColor: "#0F4D92",
    borderRadius: 15,
    top: -125,
    width: widthPercentageToDP("80%"),
    height: heightPercentageToDP("8%"),
    justifyContent: "center",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    bottom: 80,
    left: 21,
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
    height: heightPercentageToDP("50%"),
    width: widthPercentageToDP("90%"),
    backgroundColor: "#fff",
    borderRadius: 15,
    right: -21,
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
    fontWeight: "bold",
  },

  pic: {
    flexDirection: "row",
    bottom: 314,
    left: 300,
  },

  belowbtn: {
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    borderColor: "#0F4D92",
    borderRadius: 10,
    borderWidth: 1,
    bottom: -210,
    paddingHorizontal: 10,
  },
});
