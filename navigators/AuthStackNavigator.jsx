import React from 'react';
import { headerOptions } from 'redvest/util/styles';
import BackChevron from 'redvest/components/BackChevron';

import { createStackNavigator } from '@react-navigation/stack';
import SignUpScreen from 'redvest/screens/auth/SignUpScreen';
import SignInScreen from 'redvest/screens/auth/SignInScreen';
import ResetPasswordScreen from 'redvest/screens/auth/ResetPasswordScreen';

const AuthStack = createStackNavigator();

function AuthStackNavigator() {
  return (
    <AuthStack.Navigator screenOptions={headerOptions}>
      <AuthStack.Screen
        name="SignIn"
        component={SignInScreen}
        options={{
          headerLeft: () => <BackChevron />,
          title: 'Sign in',
        }}
      />
      <AuthStack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{
          headerLeft: () => <BackChevron />,
          title: 'Create an account',
        }}
      />
      <AuthStack.Screen
        name="ResetPassword"
        component={ResetPasswordScreen}
        options={{
          headerLeft: () => <BackChevron />,
          title: 'Reset your password',
        }}
      />
    </AuthStack.Navigator>
  );
}

export default AuthStackNavigator;
