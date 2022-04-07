import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import * as Haptics from "expo-haptics";
import React, { useState } from "react";
import { TextInput } from "react-native-gesture-handler";
import { Input } from "react-native-elements";
import PasswordInputText from "react-native-hide-show-password-input";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";

const Signup = ({ navigation }) => {
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

          <Text style={styles.h1}>Create Your Account</Text>

          <View style={styles.card}>
            <View style={styles.heading1}>
              <Text style={styles.text}> First Name </Text>
            </View>

            <View style={styles.heading2}>
              <Text style={styles.text}> Last Name </Text>
            </View>

            <View style={styles.input1}>
              <TextInput
                style={{
                  marginTop: 40,
                  width: widthPercentageToDP("40%"),
                  height: heightPercentageToDP("5%"),
                  borderRadius: 5,
                  backgroundColor: "#EAEAED",
                  paddingLeft: 10,
                  left: -22,
                  top: 50,
                }}
                placeholder="First Name"
                errorStyle={{ color: "red" }}
                errorMessage="ENTER A VALID ERROR HERE"
              />

              <View>
                <Image
                  source={require("../assets/user.png")}
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                    top: 100,
                    left: -49,
                  }}
                />
              </View>

              <TextInput
                style={{
                  marginTop: 40,
                  width: widthPercentageToDP("40%"),
                  height: heightPercentageToDP("5%"),
                  borderRadius: 5,
                  backgroundColor: "#EAEAED",
                  paddingLeft: 10,
                  left: -18,
                  top: 50,
                }}
                placeholder="Last Name"
                errorStyle={{ color: "red" }}
                errorMessage="ENTER A VALID ERROR HERE"
              />

              <Image
                source={require("../assets/user.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  top: 100,
                  left: -45,
                }}
              />
            </View>

            <View>
              <View style={styles.headingem}>
                <Text style={styles.text}> Email </Text>
              </View>
              <TextInput
                style={{
                  marginTop: 40,
                  width: widthPercentageToDP("83%"),
                  height: heightPercentageToDP("5%"),
                  borderRadius: 5,
                  backgroundColor: "#EAEAED",
                  left: 15,
                  paddingLeft: 10,
                  top: -320,
                }}
                placeholder="Enter your e-mail"
                errorStyle={{ color: "red" }}
                errorMessage="ENTER A VALID ERROR HERE"
              />
              <Image
                source={require("../assets/email.png")}
                resizeMode="contain"
                style={{
                  width: 29,
                  height: 28,
                  top: -355,
                  right: -338,
                }}
              />
            </View>

            <View>
              <View style={styles.headingpass}>
                <Text style={styles.text}> Password </Text>
              </View>
              <TextInput
                style={{
                  marginTop: 40,
                  width: widthPercentageToDP("83%"),
                  height: heightPercentageToDP("5%"),
                  borderRadius: 5,
                  backgroundColor: "#EAEAED",
                  left: 15,
                  paddingLeft: 10,
                  top: -455,
                }}
                placeholder="Enter your password"
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
                    style={{ height: 25, width: 25, top: -490, left: 340 }}
                  />
                ) : (
                  <Image
                    source={require("../assets/hide.png")}
                    style={{ height: 25, width: 25, top: -490, left: 340 }}
                  />
                )}
              </TouchableOpacity>
            </View>

            <View>
              <View style={styles.headingcpass}>
                <Text style={styles.text}> Confirm Password </Text>
              </View>
              <TextInput
                style={{
                  marginTop: 40,
                  width: widthPercentageToDP("83%"),
                  height: heightPercentageToDP("5%"),
                  borderRadius: 5,
                  backgroundColor: "#EAEAED",
                  left: 15,
                  paddingLeft: 10,
                  top: -580,
                }}
                placeholder="Confirm your password"
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
                    style={{ height: 25, width: 25, top: -615, left: 340 }}
                  />
                ) : (
                  <Image
                    source={require("../assets/hide.png")}
                    style={{ height: 25, width: 25, top: -615, left: 340 }}
                  />
                )}
              </TouchableOpacity>
            </View>
          </View>

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
                  bottom: -35,
                }}
              >
                Sign Up
              </Text>
            </TouchableOpacity>

            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                top: 110,
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  color: "#0F4D92",
                }}
              >
                - Or Sign up with -
              </Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                left: 0,
                top: -80,
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
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
};

export default Signup;

const styles = StyleSheet.create({
  bg: {
    height: heightPercentageToDP("60%"),
    width: widthPercentageToDP("100%"),
    backgroundColor: "#0F4D92",
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

  Button: {
    width: widthPercentageToDP("80%"),
    height: heightPercentageToDP("8%"),
    backgroundColor: "#0F4D92",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    top: 10,
    left: 42,
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

  h1: {
    textAlign: "center",
    top: 100,
    color: "#fff",
    fontSize: 30,
    left: 5,
  },

  card: {
    height: heightPercentageToDP("60%"),
    width: widthPercentageToDP("90%"),
    backgroundColor: "#fff",
    borderRadius: 15,
    right: -21,
    top: 115,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
  },

  heading1: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    top: -20,
    right: 155,
  },

  heading2: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    top: -138,
    left: 35,
  },

  headingem: {
    justifyContent: "center",
    fontSize: 15,
    right: -1,
    top: -240,
    fontWeight: "bold",
  },

  headingpass: {
    justifyContent: "center",
    fontSize: 15,
    right: -1,
    top: -375,
    fontWeight: "bold",
  },

  headingcpass: {
    justifyContent: "center",
    fontSize: 15,
    right: -1,
    top: -505,
    fontWeight: "bold",
  },

  input1: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    top: -265,
    left: 40,
    paddingRight: 18,
  },
});
