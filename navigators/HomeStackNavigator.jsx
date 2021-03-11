import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "redvest/screens/Home/homescreen";
import Onboarding from "redvest/screens/Home/homescreen";
import main from "redvest/screens/Home/main";
import macd from "redvest/screens/Profile/macd";
import dualma from "redvest/screens/Profile/dualma";
import threema from "redvest/screens/Profile/threema";
import rsi from "redvest/screens/Profile/rsi";
import SignInScreen from "redvest/screens/auth/SignInScreen";
import SignUpScreen from "redvest/screens/auth/SignUpScreen";

const HomeStack = createStackNavigator();

function HomeStackNavigator() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
      <HomeStack.Screen name="Onboarding" component={Onboarding} />
      <HomeStack.Screen name="main" component={main} />
      <HomeStack.Screen name="macd" component={macd} />
      <HomeStack.Screen name="rsi" component={rsi} />
      <HomeStack.Screen name="dualma" component={dualma} />
      <HomeStack.Screen name="threema" component={threema} />
      <HomeStack.Screen name="SignUpScreen" component={SignUpScreen} />
      <HomeStack.Screen name="SignInScreen" component={SignInScreen} />
    </HomeStack.Navigator>
  );
}

export default HomeStackNavigator;
