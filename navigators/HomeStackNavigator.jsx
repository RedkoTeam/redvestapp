import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from 'redvest/screens/Home/homescreen';
import Onboarding from 'redvest/screens/Home/homescreen';
import stepOne from 'redvest/screens/invest/stepOne';
import stepTwo from 'redvest/screens/invest/stepTwo';
import stepThree from 'redvest/screens/invest/stepThree';
import stepThreea from 'redvest/screens/invest/stepThreea';
import stepFour from 'redvest/screens/invest/stepFour';
import stepFive from 'redvest/screens/invest/stepFive';
import stepFiveA from 'redvest/screens/invest/stepFiveA';
import main from 'redvest/screens/invest/main';
import tfInfo from 'redvest/screens/info/tfInfo';
import tickerInfo from 'redvest/screens/info/tickerInfo';
import typeInfo from 'redvest/screens/info/typeInfo';
import slInfo from 'redvest/screens/info/slInfo';


const HomeStack = createStackNavigator();

function HomeStackNavigator() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
      <HomeStack.Screen name="Onboarding" component={Onboarding} />
      <HomeStack.Screen name="stepOne" component={stepOne} />
      <HomeStack.Screen name="stepTwo" component={stepTwo} />
      <HomeStack.Screen name="stepThree" component={stepThree} />
      <HomeStack.Screen name="stepThreea" component={stepThreea} />
      <HomeStack.Screen name="stepFour" component={stepFour} />
      <HomeStack.Screen name="stepFive" component={stepFive} />
      <HomeStack.Screen name="stepFiveA" component={stepFiveA} />
      <HomeStack.Screen name="main" component={main} />
      <HomeStack.Screen name="tfInfo" component={tfInfo} />
      <HomeStack.Screen name="typeInfo" component={typeInfo} />
      <HomeStack.Screen name="tickerInfo" component={tickerInfo} />
      <HomeStack.Screen name="slInfo" component={slInfo} />
    </HomeStack.Navigator>
  );
}

export default HomeStackNavigator;
