import React, { useContext } from 'react';
import AuthContext from 'redvest/contexts/AuthContext';
import { headerOptions } from 'redvest/util/styles';
import BackChevron from 'redvest/components/BackChevron';

import { createStackNavigator } from '@react-navigation/stack';
import SignUpScreen from 'redvest/screens/auth/SignUpScreen';
import SignInScreen from 'redvest/screens/auth/SignInScreen';
import ResetPasswordScreen from 'redvest/screens/auth/ResetPasswordScreen';

import Profile from 'redvest/screens/Invest/Profile';
import ActiveStrategies from 'redvest/screens/Profile/ActiveStrategies';
import orders from 'redvest/screens/Profile/orders';
import history from 'redvest/screens/Profile/history';
import Dashboard from 'redvest/screens/Invest/dashboard';
import AccountInfo from 'redvest/screens/Invest/AccountInfo';

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
            name="AccountInfo"
            component={AccountInfo}
            options={{
              headerLeft: () => <BackChevron />,
              title: 'Account Info',
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
            name="Dashboard"
            component={Dashboard}
            options={{
              headerLeft: () => <BackChevron />,
              title: 'Dashboard',
            }}
          />
        </>
      )}
    </AuthStack.Navigator>
  );
}

export default AccountStackNavigator;
