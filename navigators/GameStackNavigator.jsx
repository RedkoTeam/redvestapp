import React from 'react';
import { headerOptions } from 'redvest/util/styles';
import BackChevron from 'redvest/components/BackChevron';

import { createStackNavigator } from '@react-navigation/stack';
import GameScreen from 'redvest/screens/game/GameScreen';

const GameStack = createStackNavigator();

function AccountStackNavigator() {
  return (
    <GameStack.Navigator screenOptions={headerOptions}>
      <GameStack.Screen
        name="Game"
        component={GameScreen}
        options={{
          headerLeft: () => <BackChevron />,
          title: 'Game Screen',
        }}
      />
    </GameStack.Navigator>
  );
}

export default AccountStackNavigator;
