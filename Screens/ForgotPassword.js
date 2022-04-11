import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-gesture-handler";
import { auth } from "../firebase";

const ForgotPassword = ({ navigation }) => {
  const [email, setemail] = useState("");

  const forgotPassword = () => {
    auth.sendPasswordResetEmail(email).then(() => {
      alert("Mail Sent, Please Check Your Mailbox");
    });
  };

  return (
    <ScrollView>
      <View style={styles.bg}>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Image
            source={require("../assets/WhiteArrow_Icon.png")}
            resizeMode="contain"
            style={{
              width: 29,
              height: 28,
              top: 80,
              left: 10,
            }}
          />
        </TouchableOpacity>

        <Image
          source={require("../assets/forgot-password.png")}
          resizeMode="contain"
          style={{
            width: 209,
            height: 158,
            top: 90,
            left: 120,
          }}
        />

        <Text style={styles.text}> Forgot Password ?</Text>

        <Text style={styles.text2}> Don't worry! It happens 😅</Text>
        <Text style={styles.text2}> Please enter the e-mail address </Text>
        <Text style={styles.text2}> associated with your account</Text>

        <Text
          style={{ left: 48, top: 235, fontSize: 17, fontFamily: "Comfortaa" }}
        >
          {" "}
          Email{" "}
        </Text>

        <TextInput
          style={{
            marginTop: 40,
            width: 332,
            height: 43,
            borderRadius: 5,
            backgroundColor: "#EAEAED",
            paddingLeft: 10,
            left: 50,
            top: 210,
            shadowOffset: { width: 0, height: 6 },
            shadowColor: "black",
            shadowOpacity: 0.2,
            fontFamily: "Comfortaa",
            fontSize: 14,
          }}
          autoCapitalize="none"
          placeholder="Enter your e-mail"
          onChangeText={setemail}
          value={email}
        />
        <View style={styles.pic}>
          <Image
            source={require("../assets/email.png")}
            resizeMode="contain"
            style={{
              width: 29,
              height: 28,
              top: 177,
              left: 345,
            }}
          />
        </View>

        <View style={styles.Button}>
          <TouchableOpacity onPress={() => forgotPassword()}>
            <Text
              style={{
                textAlign: "center",
                color: "#fff",
                fontSize: 22,
                fontFamily: "Poppins",
              }}
            >
              Reset my Password
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  bg: {
    height: 490,
    width: 450,
    backgroundColor: "#0F4D92",
  },

  text: {
    color: "#fff",
    textAlign: "center",
    top: 109,
    fontSize: 30,
    left: -5,
    fontFamily: "Comfortaa",
  },

  text2: {
    color: "#fff",
    textAlign: "center",
    fontSize: 18,
    top: 140,
    left: -10,
    lineHeight: 25,
    fontFamily: "Comfortaa",
  },

  Button: {
    backgroundColor: "#0F4D92",
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
    top: 250,
    left: 59,
  },
});
