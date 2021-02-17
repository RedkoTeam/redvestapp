import React, { useContext } from 'react';
import AuthContext from 'redvest/contexts/AuthContext';

import { NavigationContainer } from '@react-navigation/native';
import AuthStackNavigator from 'redvest/navigators/AuthStackNavigator';
import HomeStackNavigator from 'redvest/navigators/HomeStackNavigator';

function Navigation() {
  const { user } = useContext(AuthContext);

  return (
    <NavigationContainer>
      {user ? <HomeStackNavigator /> : <AuthStackNavigator />}
    </NavigationContainer>
  );
}

export default Navigation;
