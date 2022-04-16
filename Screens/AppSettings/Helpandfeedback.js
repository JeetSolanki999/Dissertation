import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Form,
} from "react-native";

import { Input } from "react-native-elements";
import { TextInput } from "react-native-gesture-handler";
import { Linking } from "react-native";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import Rating from "../Props/Rating";

const Helpandfeedback = ({ navigation }) => {
  const sendEmail = async () => {
    Linking.openURL("mailto:js150@hw.ac.uk");
  };
  const [text, setText] = useState("");
  const emptyField = () => {
    setText("");
    alert("Thank you for your feedback!");
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("Tabs")}>
        <Image
          source={require("../../assets/icons/WhiteArrow_Icon.png")}
          resizeMode="contain"
          style={{ height: 29, width: 28, top: 75, right: 185 }}
        />
      </TouchableOpacity>

      <Text style={styles.h1}> Help and Feedback </Text>
      <View style={styles.card}>
        <Text
          style={{
            fontFamily: "Comfortaa",
            fontSize: 16,
            textAlign: "justify",
            top: 20,
            lineHeight: 30,
            paddingRight: 20,
          }}
        >
          {" "}
          Hi there, {"\n"}
          {"\n"} This is my first phone based application. {"\n"} I would love
          to hear your feedback! {"\n"} You can either mailto{" "}
          <Text
            onPress={sendEmail}
            style={{
              color: "#0F4D92",
              fontFamily: "Poppins",
              textAlign:"justify"
            }}
          >
            js150@hw.ac.uk
          </Text>{" "}
          or {"\n"} send any message via the feedback {"\n"} form. {"\n"} {"\n"}
          Thanks, {" \n"} JS.
        </Text>

        <TextInput
          style={{
            marginTop: 40,
            width: widthPercentageToDP("83%"),
            height: heightPercentageToDP("5%"),
            borderRadius: 5,
            backgroundColor: "#EAEAED",
            fontFamily: "Comfortaa",
            fontSize: 14,
            paddingTop: 15,
            paddingLeft: 15,
          }}
          placeholder="Write something"
          onChangeText={(text) => setText(text)}
          value={text}
          multiline={true}
        />

        <View style={styles.star}>
          <Text
            style={{
              fontSize: 18,
              fontFamily: "Comfortaa",
              textAlign: "center",
              top: -15,
            }}
          >
            - Please leave a Rating -{" "}
          </Text>
          <Rating rating={3} />
        </View>

        <View style={styles.Button}>
          <TouchableOpacity onPress={emptyField}>
            <Text
              style={{
                textAlign: "center",
                color: "#0F4D92",
                fontSize: 24,
                fontFamily: "Poppins",
              }}
            >
              Submit Review
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Helpandfeedback;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: "center",
    backgroundColor: "#0F4D92",
  },

  card: {
    height: heightPercentageToDP("60%"),
    width: widthPercentageToDP("90%"),
    backgroundColor: "#fff",
    borderRadius: 15,
    alignItems: "center",
    top: 110,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
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
    top: 130,
  },

  h1: {
    fontSize: 30,
    fontFamily: "Comfortaa",
    color: "#fff",
    alignItems: "center",
    top: 90,
  },

  star: {
    alignContent: "center",
    justifyContent: "center",
    top: 60,
    left: 0,
  },
});
