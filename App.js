import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Tabs from "./Navigation/navbar";
import Splash from "./Screens/AppRegistration/Splash";
import Login from "./Screens/AppRegistration/Login";
import Signup from "./Screens/AppRegistration/Signup";
import ForgotPassword from "./Screens/AppRegistration/ForgotPassword";
import Helpandfeedback from "./Screens/AppSettings/Helpandfeedback";
import UpdateProfile from "./Screens/AppSettings/UpdateProfile";
import Settings from "./Screens/AppSettings/Settings";
import registerNNPushToken from "native-notify";
import TandC from "./Screens/AppSettings/TandC";

import { StripeProvider } from "@stripe/stripe-react-native";
import { useFonts } from "expo-font";

const App = () => {
  registerNNPushToken(2466, "O7r9KWeqgC96mlfbLCHdih");
  const Stack = createStackNavigator();

  const [loaded] = useFonts({
    Comfortaa: require("./assets/Fonts/Comfortaa.ttf"),
    Zilap: require("./assets/Fonts/Zilap.ttf"),
    Poppins: require("./assets/Fonts/Poppins.ttf"),
  });

  if (!loaded) {
    return null;
  }

  const globalScreenOptions = {
    headerShown: false,
  };
  return (
    <StripeProvider publishableKey="pk_test_51KltnxDSvLLV7Jtr2lV3yhbABcCmhZ2MWAlnPt3h8yGGjcKPBtY5oE6f1CDwxDfR6rAFOyMGrer5TPu1X68z5wKn002tnGhv6r">
      <NavigationContainer>
        <Stack.Navigator screenOptions={globalScreenOptions}>
          {/* <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} /> */}
          <Stack.Screen name="Tabs" component={Tabs} />
          <Stack.Screen name="Settings" component={Settings} />
          <Stack.Screen name="Helpandfeedback" component={Helpandfeedback} />
          <Stack.Screen name="TandC" component={TandC} />
          <Stack.Screen name="UpdateProfile" component={UpdateProfile} />
        </Stack.Navigator>
      </NavigationContainer>
    </StripeProvider>
  );
};

export default App;
