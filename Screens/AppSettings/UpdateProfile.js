import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
  TextInputBase,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native"; //../firebase

import React, { useState, useEffect } from "react";
import { getDatabase, ref, onValue, set, update } from "firebase/database";
import { auth } from "../../firebase";

const Profile = ({ navigation }) => {
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

  const updateProfile = () => {
    const database = getDatabase();
    set(ref(database, "users/" + auth.currentUser.uid), {
      email,
      fname,
      lname,
    });
    alert("Profile Updated");
  };

  const [selectedValue, setSelectedValue] = useState("java");
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

          <TouchableOpacity onPress={() => navigation.navigate("Tabs")}>
            <Image
              source={require("../../assets/icons/left-arrow.png")}
              style={{
                width: 29,
                height: 28,
                left: -140,
                top: -132,
              }}
            />
          </TouchableOpacity>
        </View>

        <View>
          <Text style={styles.name}>{fname + " " + lname}</Text>
        </View>
        <View style={styles.card}>
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
              onChangeText={setFname}
            ></TextInput>
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
              onChangeText={setLname}
            ></TextInput>
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
              onChangeText={setEmail}
            ></TextInput>
            <View
              style={{
                flexDirection: "column",
              }}
            >
              <Text style={styles.sidetxt}>First Name:</Text>
              <Text style={styles.sidetxt}>Second Name:</Text>
              <Text style={styles.sidetxt}>Email:</Text>
            </View>

            {/* <Picker /> */}
          </View>
        </View>

        <View style={styles.Button}>
          <TouchableOpacity onPress={() => updateProfile()}>
            <Text
              style={{
                textAlign: "center",
                color: "#0F4D92",
                fontSize: 24,
                fontFamily: "Poppins",
              }}
            >
              Update Profile
            </Text>
          </TouchableOpacity>
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
    top: -200,
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
