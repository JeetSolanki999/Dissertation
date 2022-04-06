import React, { useState } from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Tabs from "./Navigation/navbar";
import Splash from "./Screens/Splash";
import Login from "./Screens/Login";
import Signup from "./Screens/Signup";
import ForgotPassword from "./Screens/ForgotPassword";
import Helpandfeedback from "./Screens/Helpandfeedback";
import Settings from "./Screens/Settings";

const App = () => {
  const Stack = createStackNavigator();

  const globalScreenOptions = {
    headerShown: false,
  };
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={globalScreenOptions}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="Tabs" component={Tabs} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Helpandfeedback" component={Helpandfeedback} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
