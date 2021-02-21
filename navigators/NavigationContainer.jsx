import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from 'redvest/navigators/BottomTabNavigator';

function Navigation() {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
}

export default Navigation;
