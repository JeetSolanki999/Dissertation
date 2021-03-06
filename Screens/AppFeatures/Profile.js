import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import React, { useState, useEffect } from "react";

import { getDatabase, ref, onValue } from "firebase/database";
import { auth } from "../../Server/firebase";

const Profile = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    profileDataGetter();
  }, []);

  const profileDataGetter = () => {
    const database = getDatabase();
    const dbRef = ref(database, "users/" + auth.currentUser.uid);
    onValue(dbRef, (data) => {
      console.log(data.val());
      setFname(data.val().fname);
      setLname(data.val().lname);
      setEmail(data.val().email);
    });
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        <View style={styles.circle}></View>
        <View style={styles.profilec}>
          <Image
            source={require("../../assets/icons/blueuser.png")}
            style={{
              width: 80,
              height: 80,
              left: 19,
              top: 20,
            }}
          />
        </View>

        <View>
          <Text style={styles.name}> Hello, {fname + " " + lname}</Text>
        </View>

        <View
          style={{
            width: 230,
            height: 30,
            top: -400,
            left: 60,
          }}
        >
          <TextInput
            placeholder="First Name"
            style={{
              borderRadius: 5,
              paddingLeft: 10,
              fontFamily: "Comfortaa",
              height: 40,
              fontSize: 16,
              height: 40,
              backgroundColor: "#fff",
              color: "#000",
            }}
            value={fname}
            //onChangeText={setFname}
          />
          <View
            style={{
              height: 15,
            }}
          ></View>
          <TextInput
            placeholder="Last Name"
            style={{
              borderRadius: 5,
              paddingLeft: 10,
              fontFamily: "Comfortaa",
              fontSize: 16,
              height: 40,
              backgroundColor: "#fff",
              color: "#000",
            }}
            value={lname}
            // onChangeText={setLname}
          />
          <View
            style={{
              height: 15,
            }}
          ></View>
          <TextInput
            placeholder="Email"
            style={{
              borderRadius: 5,
              paddingLeft: 10,
              fontFamily: "Comfortaa",
              fontSize: 16,
              height: 40,
              backgroundColor: "#fff",
              color: "#000",
            }}
            value={email}
            //onChangeText={setEmail}
          />
          <View
            style={{
              flexDirection: "column",
            }}
          >
            <Text style={styles.sidetxt}>First Name:</Text>
            <Text style={styles.sidetxt}>Second Name:</Text>
            <Text style={styles.sidetxt}>Email:</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F4D92",
    alignItems: "center",
    justifyContent: "center",
  },

  name: {
    fontSize: 30,
    fontFamily: "Comfortaa",
    color: "#000",
    top: -620,
  },

  text: {
    fontSize: 25,
    color: "#fff",
    left: 20,
    bottom: 10,
    fontFamily: "Comfortaa",
  },

  circle: {
    height: "50%",
    width: 500,
    top: -370,
    borderBottomLeftRadius: 300,
    borderBottomRightRadius: 300,
    backgroundColor: "#fff",
  },

  profilec: {
    backgroundColor: "#fff",
    height: 120,
    width: 120,
    borderRadius: 100,
    bottom: 450,
    borderColor: "#000",
    borderWidth: 1,
  },

  image: {
    width: 40,
    height: 40,
    margin: " 3%",
    bottom: 60,
    left: -40,
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

  sidetxt: {
    paddingBottom: 30,
    fontFamily: "Poppins",
    fontSize: 16,
    color: "#fff",
    left: -140,
    top: -145,
  },
});
