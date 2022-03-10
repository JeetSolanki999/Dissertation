import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Tabs from "./Navigation/navbar";
import Splash from "./Screens/Splash";
import Login from "./Screens/Login";
import Signup from "./Screens/Signup";
import ForgotPassword from "./Screens/ForgotPassword";
import Wallet from "./Screens/Wallet";

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
        <Stack.Screen name="Wallet" component={Wallet} />

        {/* <Login /> */}
        {/* <Tabs /> */}
        {/* <Signup /> */}
        {/* <ForgotPassword /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// function getWidth() {
//   let width = Dimensions.get("window").width;
//   width = width - 60;
//   return width / 5;
// }

// screenOptions={{
//   tabBarShowLabel: false,

export default App;
