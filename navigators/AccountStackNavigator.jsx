import React, { useContext } from 'react';
import AuthContext from 'redvest/contexts/AuthContext';
import { headerOptions } from 'redvest/util/styles';
import BackChevron from 'redvest/components/BackChevron';

import { createStackNavigator } from '@react-navigation/stack';
import SignUpScreen from 'redvest/screens/auth/SignUpScreen';
import SignInScreen from 'redvest/screens/auth/SignInScreen';
import ResetPasswordScreen from 'redvest/screens/auth/ResetPasswordScreen';

import Profile from 'redvest/screens/invest/Profile';
import ActiveStrategies from 'redvest/screens/Profile/ActiveStrategies';
import orders from 'redvest/screens/Profile/orders';
import history from 'redvest/screens/Profile/history';
import macd from 'redvest/screens/Profile/macd';
import dualma from 'redvest/screens/Profile/dualma';
import threema from 'redvest/screens/Profile/threema';
import rsi from 'redvest/screens/Profile/threema';

const AuthStack = createStackNavigator();

function AccountStackNavigator() {
  const { user } = useContext(AuthContext);

  return (
    <AuthStack.Navigator screenOptions={headerOptions}>
      {!user ? (
        <>
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
        </>
      ) : (
        <>
          <AuthStack.Screen
            name="Profile"
            component={Profile}
            options={{
              headerLeft: () => <BackChevron />,
              title: 'Profile',
            }}
          />
          <AuthStack.Screen
            name="ActiveStrategies"
            component={ActiveStrategies}
            options={{
              headerLeft: () => <BackChevron />,
              title: 'Active strategies',
            }}
          />
          <AuthStack.Screen
            name="orders"
            component={orders}
            options={{
              headerLeft: () => <BackChevron />,
              title: 'Orders',
            }}
          />
          <AuthStack.Screen
            name="history"
            component={history}
            options={{
              headerLeft: () => <BackChevron />,
              title: 'History',
            }}
          />
          <AuthStack.Screen
            name="macd"
            component={macd}
            options={{
              headerLeft: () => <BackChevron />,
              title: 'MACD',
            }}
          />
          <AuthStack.Screen
            name="dualma"
            component={dualma}
            options={{
              headerLeft: () => <BackChevron />,
              title: 'DUALMA',
            }}
          />
          <AuthStack.Screen
            name="threema"
            component={threema}
            options={{
              headerLeft: () => <BackChevron />,
              title: 'THREEMA',
            }}
          />
          <AuthStack.Screen
            name="rsi"
            component={rsi}
            options={{
              headerLeft: () => <BackChevron />,
              title: 'RSI',
            }}
          />
        </>
      )}
    </AuthStack.Navigator>
  );
}

export default AccountStackNavigator;
