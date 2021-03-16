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
import { headerOptions } from "redvest/util/styles";
import BackChevron from "redvest/components/BackChevron";
const HomeStack = createStackNavigator();

function HomeStackNavigator() {
  return (
    <HomeStack.Navigator
      // screenOptions={{ headerShown: false }}
      screenOptions={headerOptions}
    >
      <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
      <HomeStack.Screen name="Onboarding" component={Onboarding} />
      <HomeStack.Screen name="main" component={main} />
      <HomeStack.Screen
        name="macd"
        component={macd}
        options={{
          headerLeft: () => <BackChevron />,
          title: "Game Screen",
        }}
      />
      <HomeStack.Screen
        name="rsi"
        component={rsi}
        options={{
          headerLeft: () => <BackChevron />,
          title: "Game Screen",
        }}
      />
      <HomeStack.Screen
        name="dualma"
        component={dualma}
        options={{
          headerLeft: () => <BackChevron />,
          title: "Game Screen",
        }}
      />
      <HomeStack.Screen
        name="threema"
        component={threema}
        options={{
          headerLeft: () => <BackChevron />,
          title: "Game Screen",
        }}
      />
      <HomeStack.Screen
        name="SignUpScreen"
        component={SignUpScreen}
        options={{
          headerLeft: () => <BackChevron />,
          title: "Game Screen",
        }}
      />
      <HomeStack.Screen
        name="SignInScreen"
        component={SignInScreen}
        options={{
          headerLeft: () => <BackChevron />,
          title: "Game Screen",
        }}
      />
    </HomeStack.Navigator>
  );
}

export default HomeStackNavigator;
