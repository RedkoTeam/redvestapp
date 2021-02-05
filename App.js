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


</Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;