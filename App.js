'use strict';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

import HomeScreen from './screens/Home/homescreen.js'
import Onboarding from './screens/Home/homescreen.js'
import stepOne from './screens/Invest/stepOne.js'


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

</Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;