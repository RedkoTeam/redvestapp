'use strict';
import React from 'react';
import './fixtimerbug';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

import HomeScreen from './src/screens/Home/homescreen'
import Onboarding from './src/screens/Onboarding'

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

</Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;