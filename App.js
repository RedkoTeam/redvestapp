'use strict';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

import HomeScreen from './screens/Home/homescreen.js'
import Onboarding from './screens/Home/homescreen.js'
import stepOne from './screens/Invest/stepOne.js'
import stepTwo from './screens/Invest/stepTwo.js'
import stepThree from './screens/Invest/stepThree.js'
import stepThreea from './screens/Invest/stepThreea.js'
import stepFour from './screens/Invest/stepFour.js'
import stepFive from './screens/Invest/stepFive.js'
import stepFiveA from './screens/Invest/stepFiveA.js'
import main from './screens/Invest/main.js'
import Profile from './screens/Invest/Profile.js'
import Invest from './screens/Invest/Invest.js'
import tfInfo from './screens/info/tfInfo.js'
import tickerInfo from './screens/info/tickerInfo.js'
import typeInfo from './screens/info/typeInfo.js'
import slInfo from './screens/info/slInfo.js'
import history from './screens/Profile/history.js'
import ActiveStrategies from './screens/Profile/ActiveStrategies.js'
import orders from './screens/Profile/orders.js'
import macd from './screens/Profile/macd.js'
import dualma from './screens/Profile/dualma.js'
import threema from './screens/Profile/threema.js'
import rsi from './screens/Profile/threema.js'
import SignUp from './screens/SignUp/SignUp.js'
import Login from './screens/SignUp/Login.js'




// ONLY STORE NAVIGATION HERE

function App() {
    const forFade = ({ current }) => ({ cardStyle: { opacity: current.progress }});
  
    // Put Error fallback here
    
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}>

<Stack.Screen name="HomeScreen" component={HomeScreen} />
<Stack.Screen name="Onboarding" component={Onboarding} />
<Stack.Screen name="stepOne" component={stepOne} />
<Stack.Screen name="stepTwo" component={stepTwo} /> 
<Stack.Screen name="stepThree" component={stepThree} /> 
<Stack.Screen name="stepThreea" component={stepThreea} /> 
<Stack.Screen name="stepFour" component={stepFour} /> 
<Stack.Screen name="stepFive" component={stepFive} /> 
<Stack.Screen name="stepFiveA" component={stepFiveA} /> 
<Stack.Screen name="main" component={main} /> 
<Stack.Screen name="Profile" component={Profile} /> 
<Stack.Screen name="Invest" component={Invest} /> 
<Stack.Screen name="tfInfo" component={tfInfo} /> 
<Stack.Screen name="typeInfo" component={typeInfo} /> 
<Stack.Screen name="tickerInfo" component={tickerInfo} /> 
<Stack.Screen name="slInfo" component={slInfo} /> 
<Stack.Screen name="history" component={history} /> 
<Stack.Screen name="orders" component={orders} /> 
<Stack.Screen name="macd" component={macd} /> 
<Stack.Screen name="rsi" component={rsi} /> 
<Stack.Screen name="dualma" component={dualma} /> 
<Stack.Screen name="threema" component={threema} /> 
<Stack.Screen name="ActiveStrategies" component={ActiveStrategies} /> 
<Stack.Screen name="SignUp" component={SignUp} /> 
<Stack.Screen name="Login" component={Login} /> 


</Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;