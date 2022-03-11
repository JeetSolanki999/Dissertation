import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Button,
  ScrollView,
} from "react-native";
import React from "react";
import * as Haptics from "expo-haptics";

const Helpandfeedback = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
        <Image
          source={require("../assets/WhiteArrow_Icon.png")}
          resizeMode="contain"
          style={{
            width: 29,
            height: 28,
            bottom: 350,
            left: -180,
          }}
        />
      </TouchableOpacity>
      <View>
        <Text style={styles.settings}> Help and Feedback </Text>
      </View>

      <Button
        title="Success"
        onPress={() =>
          Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success)
        }
      />
    </ScrollView>
  );
};

export default Helpandfeedback;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0F4D92",
  },

  settings: {
    textAlign: "center",
    bottom: -32,
    color: "#fff",
    fontSize: 30,
  },
});