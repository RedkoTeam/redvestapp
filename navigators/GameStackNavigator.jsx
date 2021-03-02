import React from 'react';
import { GameProvider } from 'redvest/contexts/GameContext';

import { headerOptions } from 'redvest/util/styles';
import BackChevron from 'redvest/components/BackChevron';

import { createStackNavigator } from '@react-navigation/stack';
import stepOne from 'redvest/screens/game/stepOne';
import stepTwo from 'redvest/screens/game/stepTwo';
import stepThree from 'redvest/screens/game/stepThree';
import stepThreea from 'redvest/screens/game/stepThreea';
import stepFour from 'redvest/screens/game/stepFour';
import stepFive from 'redvest/screens/game/stepFive';
import stepFiveA from 'redvest/screens/game/stepFiveA';

const GameStack = createStackNavigator();

function AccountStackNavigator() {
  return (
    <GameProvider>
      <GameStack.Navigator screenOptions={headerOptions}>
        <GameStack.Screen
          name="stepOne"
          component={stepOne}
          options={{
            headerLeft: () => <BackChevron />,
            title: 'Game Screen',
          }}
        />
        <GameStack.Screen name="stepTwo" component={stepTwo} />
        <GameStack.Screen name="stepThree" component={stepThree} />
        <GameStack.Screen name="stepThreea" component={stepThreea} />
        <GameStack.Screen name="stepFour" component={stepFour} />
        <GameStack.Screen name="stepFive" component={stepFive} />
        <GameStack.Screen name="stepFiveA" component={stepFiveA} />
      </GameStack.Navigator>
    </GameProvider>
  );
}

export default AccountStackNavigator;
