import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Wallet from "../Screens/Wallet";
import CardPay from "../Screens/CardPay";
import QRNFC from "../Screens/QrNfc";
import Profile from "../Screens/Profile";
import Settings from "../Screens/Settings";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 25,
          left: 20,
          right: 20,
          alignItems: "strech",
          backgroundColor: "#ffffff",
          elevation: 0,
          borderRadius: 15,
          height: 90,
          ...styles.shadow,
        },
      }}
    >
      <Tab.Screen
        name="My Wallet"
        component={Wallet}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 15,
              }}
            >
              <Image
                source={require("../assets/icons/wallet.png")}
                resizeMode="contain"
                style={{
                  width: 40,
                  height: 40,
                  tintColor: focused ? "#0F4D92" : "#B2B2B2",
                }}
              />

              <Text
                style={{
                  color: focused ? "#0F4D92" : "#B2B2B2",
                  marginTop: 10,
                  fontSize: 14,
                  fontFamily: "Comfortaa",
                  bottom: 0,
                }}
              >
                Wallet
              </Text>
            </View>
          ),
        }}
        // listeners={({ navigation, focused }) => ({
        //   tabPress: (e) => {
        //     Animated.spring(tabOffsetValue, {
        //       toValue: getWidth,
        //       useNativeDriver: true,
        //     }).start();
        //   },
        // })}
      />

      <Tab.Screen
        name="Card Payment"
        component={CardPay}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 20,
              }}
            >
              <Image
                source={require("../assets/icons/money.png")}
                resizeMode="contain"
                style={{
                  width: 40,
                  height: 40,
                  tintColor: focused ? "#0F4D92" : "#B2B2B2",
                }}
              />

              <Text
                style={{
                  color: focused ? "#0F4D92" : "#B2B2B2",
                  marginTop: 10,
                  fontSize: 14,
                  fontFamily: "Comfortaa",
                  bottom: 5,
                }}
              >
                Card Pay
              </Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="QR/NFC"
        component={QRNFC}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                top: 10,
              }}
            >
              <Image
                source={require("../assets/icons/Scan_Icon.png")}
                resizeMode="contain"
                style={{
                  width: 50,
                  height: 50,
                  tintColor: focused ? "#05A605" : "#B2B2B2",
                }}
              />

              <Text
                style={{
                  color: focused ? "#05A605" : "#B2B2B2",
                  marginTop: 7,
                  fontSize: 14,
                  fontFamily: "Comfortaa",
                  bottom: -2,
                }}
              >
                Scan
              </Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="My Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                top: 15,
              }}
            >
              <Image
                source={require("../assets/icons/user.png")}
                resizeMode="contain"
                style={{
                  width: 40,
                  height: 40,
                  tintColor: focused ? "#0F4D92" : "#B2B2B2",
                }}
              />

              <Text
                style={{
                  color: focused ? "#0F4D92" : "#B2B2B2",
                  marginTop: 11,
                  fontSize: 14,
                  fontFamily: "Comfortaa",
                  bottom: 0,
                }}
              >
                My Profile
              </Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                top: 15,
              }}
            >
              <Image
                source={require("../assets/icons/settings.png")}
                resizeMode="contain"
                style={{
                  width: 35,
                  height: 35,
                  tintColor: focused ? "#0F4D92" : "#B2B2B2",
                }}
              />

              <Text
                style={{
                  color: focused ? "#0F4D92" : "#B2B2B2",
                  marginTop: 10,
                  fontSize: 14,
                  fontFamily: "Comfortaa",
                  bottom: -2,
                }}
              >
                Settings
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#034E95",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
