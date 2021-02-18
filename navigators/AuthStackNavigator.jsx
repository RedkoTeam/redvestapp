import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import SignUpScreen from 'redvest/screens/auth/SignUpScreen';
import SignInScreen from 'redvest/screens/auth/SignInScreen';
import ForgotPasswordScreen from 'redvest/screens/auth/ForgotPasswordScreen';

const AuthStack = createStackNavigator();

function AuthStackNavigator() {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="SignUp" component={SignUpScreen} />
      <AuthStack.Screen name="SignIn" component={SignInScreen} />
      <AuthStack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
    </AuthStack.Navigator>
  );
}

export default AuthStackNavigator;
