import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import SignUp from 'redvest/screens/SignUp/signup';
import Login from 'redvest/screens/SignUp/login';

const AuthStack = createStackNavigator();

function AuthStackNavigator() {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="SignUp" component={SignUp} />
      <AuthStack.Screen name="Login" component={Login} />
    </AuthStack.Navigator>
  );
}

export default AuthStackNavigator;
