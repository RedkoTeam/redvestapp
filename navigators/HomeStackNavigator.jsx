import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from 'redvest/screens/Home/homescreen';
import Onboarding from 'redvest/screens/Home/homescreen';
import main from 'redvest/screens/invest/main';
import tfInfo from 'redvest/screens/info/tfInfo';
import tickerInfo from 'redvest/screens/info/tickerInfo';
import typeInfo from 'redvest/screens/info/typeInfo';
import slInfo from 'redvest/screens/info/slInfo';
import macd from 'redvest/screens/Profile/macd';
import dualma from 'redvest/screens/Profile/dualma';
import threema from 'redvest/screens/Profile/threema';
import rsi from 'redvest/screens/Profile/threema';

const HomeStack = createStackNavigator();

function HomeStackNavigator() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
      <HomeStack.Screen name="Onboarding" component={Onboarding} />
      <HomeStack.Screen name="main" component={main} />
      <HomeStack.Screen name="tfInfo" component={tfInfo} />
      <HomeStack.Screen name="typeInfo" component={typeInfo} />
      <HomeStack.Screen name="tickerInfo" component={tickerInfo} />
      <HomeStack.Screen name="slInfo" component={slInfo} />
      <HomeStack.Screen name="macd" component={macd} />
      <HomeStack.Screen name="rsi" component={rsi} />
      <HomeStack.Screen name="dualma" component={dualma} />
      <HomeStack.Screen name="threema" component={threema} />
    </HomeStack.Navigator>
  );
}

export default HomeStackNavigator;
