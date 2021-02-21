import React from 'react';
import { headerOptions } from 'redvest/util/styles';

import BackChevron from 'redvest/components/header/BackChevron';
import ScreenTitle from 'redvest/components/header/ScreenTitle';

import { createStackNavigator } from '@react-navigation/stack';
import SignUpScreen from 'redvest/screens/auth/SignUpScreen';
import SignInScreen from 'redvest/screens/auth/SignInScreen';
import ResetPasswordScreen from 'redvest/screens/auth/ResetPasswordScreen';

const AuthStack = createStackNavigator();

function AuthStackNavigator() {
  return (
    <AuthStack.Navigator screenOptions={headerOptions}>
      <AuthStack.Screen
        name="Sign Up"
        component={SignUpScreen}
        options={{
          headerLeft: () => <BackChevron />,
        }}
      />
      <AuthStack.Screen
        name="Sign In"
        component={SignInScreen}
        options={{
          headerLeft: () => <BackChevron />,
        }}
      />
      <AuthStack.Screen
        name="Reset Password"
        component={ResetPasswordScreen}
        options={{
          headerLeft: () => <BackChevron />,
        }}
      />
    </AuthStack.Navigator>
  );
}

export default AuthStackNavigator;
