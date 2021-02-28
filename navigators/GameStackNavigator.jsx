import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import SCHEMA from 'redvest/schema/schema';

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
  const methods = useForm({ 
    //resolver: yupResolver(SCHEMA)
  });

  return (
    <FormProvider {...methods}>
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
    </FormProvider>
  );
}

export default AccountStackNavigator;
