import React, { useContext } from 'react';
import AuthContext from 'redvest/contexts/AuthContext';

import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from 'redvest/navigators/BottomTabNavigator';

import AuthStackNavigator from 'redvest/navigators/AccountStackNavigator';
import HomeStackNavigator from 'redvest/navigators/HomeStackNavigator';

function Navigation() {
  const { user } = useContext(AuthContext);

  return (
    <NavigationContainer>
      {/*{user ? <HomeStackNavigator /> : <AuthStackNavigator />}*/}
      <BottomTabNavigator />
    </NavigationContainer>
  );
}

export default Navigation;
