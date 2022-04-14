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
import { Input, CheckBox } from "react-native-elements";
import PasswordInputText from "react-native-hide-show-password-input";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import { auth } from "../../Server/firebase";
import { getDatabase, ref, set } from "firebase/database";

const Signup = ({ navigation }) => {
  const [isSecureEntry, setIsSecureEntry] = useState(true);
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const register = () => {
    const db = getDatabase();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        set(ref(db, "users/" + authUser.user.uid), {
          email,
          fname,
          lname,
        });
        setFname("");
        setEmail("");
        navigation.navigate("Tabs");
      })
      .catch((error) => alert(error.message));
  };

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
              source={require("../../assets/icons/WhiteArrow_Icon.png")}
              resizeMode="contain"
              style={{
                width: 29,
                height: 28,
                top: 80,
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
                  fontFamily: "Comfortaa",
                  fontSize: 14,
                }}
                placeholder="First Name"
                type="First Name"
                value={fname}
                onChangeText={(text) => setFname(text)}
              />

              <View>
                <Image
                  source={require("../../assets/icons/user.png")}
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
                  fontFamily: "Comfortaa",
                  fontSize: 14,
                }}
                placeholder="Last Name"
                type="Last Name"
                onChangeText={(text) => setLname(text)}
              />

              <Image
                source={require("../../assets/icons/user.png")}
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
                  fontFamily: "Comfortaa",
                  fontSize: 14,
                }}
                placeholder="Enter your e-mail"
                type="email"
                autoCapitalize="none"
                value={email}
                onChangeText={(text) => setEmail(text)}
              />
              <Image
                source={require("../../assets/icons/email.png")}
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
                  fontFamily: "Comfortaa",
                  fontSize: 14,
                }}
                placeholder="Enter your password"
                type="password"
                secureTextEntry={isSecureEntry}
                autoCapitalize="none"
                value={password}
                onChangeText={(text) => setPassword(text)}
              />
              <TouchableOpacity
                onPress={() => {
                  setIsSecureEntry((prev) => !prev);
                }}
              >
                {isSecureEntry ? (
                  <Image
                    source={require("../../assets/icons/show.png")}
                    style={{ height: 25, width: 25, top: -490, left: 340 }}
                  />
                ) : (
                  <Image
                    source={require("../../assets/icons/hide.png")}
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
                  fontFamily: "Comfortaa",
                  fontSize: 14,
                }}
                placeholder="Confirm your password"
                type="confirmPassword"
                secureTextEntry={isSecureEntry}
                autoCapitalize="none"
                value={confirmPassword}
                onChangeText={(text) => setConfirmPassword(text)}
                onSubmitEditing={register}
              />
              <TouchableOpacity
                onPress={() => {
                  setIsSecureEntry((prev) => !prev);
                }}
              >
                {isSecureEntry ? (
                  <Image
                    source={require("../../assets/icons/show.png")}
                    style={{ height: 25, width: 25, top: -615, left: 340 }}
                  />
                ) : (
                  <Image
                    source={require("../../assets/icons/hide.png")}
                    style={{ height: 25, width: 25, top: -615, left: 340 }}
                  />
                )}
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.Button}>
            <TouchableOpacity
              onPress={register}
              disabled={!isChecked}
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

                  fontFamily: "Poppins",
                }}
              >
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ bottom: -80 }}>
            <CheckBox
              title={"I agree to the Terms of Service and Privacy Policy"}
              checked={isChecked}
              checkedColor="#0F4D92"
              onPress={() => setIsChecked(!isChecked)}
            />
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
    bottom: -220,
    paddingHorizontal: 10,
  },

  Button: {
    width: widthPercentageToDP("80%"),
    height: heightPercentageToDP("8%"),
    backgroundColor: "#0F4D92",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    top: 20,
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
    fontFamily: "Comfortaa",
  },

  h1: {
    textAlign: "center",
    top: 100,
    color: "#fff",
    fontSize: 30,
    fontFamily: "Comfortaa",
  },

  card: {
    height: heightPercentageToDP("60%"),
    width: widthPercentageToDP("90%"),
    backgroundColor: "#fff",
    borderRadius: 15,
    right: -21,
    top: 125,
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
    right: 150,
  },

  heading2: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    top: -138,
    left: 40,
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
