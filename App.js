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
import { StripeProvider } from "@stripe/stripe-react-native";

const App = () => {
  const Stack = createStackNavigator();

  const globalScreenOptions = {
    headerShown: false,
  };
  return (
    <StripeProvider publishableKey="pk_test_51KltnxDSvLLV7Jtr2lV3yhbABcCmhZ2MWAlnPt3h8yGGjcKPBtY5oE6f1CDwxDfR6rAFOyMGrer5TPu1X68z5wKn002tnGhv6r">
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
    </StripeProvider>
  );
};

export default App;
