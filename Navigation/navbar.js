import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Wallet from "../Screens/Wallet";
import CardPay from "../Screens/CardPay";
import QRNFC from "../Screens/QrNfc";
import Profile from "../Screens/Profile";
import Settings from "../Screens/Settings";
import Splash from "../Screens/Splash";
import { useRef } from "react/cjs/react.production.min";
import { Animated } from "react-native-web";
import { NavigationContainer } from "@react-navigation/native";
import Login from "../Screens/Login";

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
                source={require("../assets/wallet.png")}
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
                  fontSize: 14,
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
                top: 15,
              }}
            >
              <Image
                source={require("../assets/money.png")}
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
                  fontSize: 14,
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
                source={require("../assets/Scan_Icon.png")}
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
                  fontSize: 14,
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
                source={require("../assets/user.png")}
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
                  fontSize: 14,
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
                source={require("../assets/settings.png")}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                  tintColor: focused ? "#0F4D92" : "#B2B2B2",
                }}
              />

              <Text
                style={{
                  color: focused ? "#0F4D92" : "#B2B2B2",
                  fontSize: 14,
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
