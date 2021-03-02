import React from 'react';
import { headerOptions } from 'redvest/util/styles';
import BackChevron from 'redvest/components/BackChevron';

import { createStackNavigator } from '@react-navigation/stack';
import InvestScreen from 'redvest/screens/invest/InvestScreen';
import tickerInfo from 'redvest/screens/info/tickerInfo';
import typeInfo from 'redvest/screens/info/typeInfo';
import tfInfo from 'redvest/screens/info/tfInfo';
import slInfo from 'redvest/screens/info/slInfo';

const InvestStack = createStackNavigator();

function InvestStackNavigator() {
  return (
    <InvestStack.Navigator screenOptions={headerOptions}>
      <InvestStack.Screen name="Invest" component={InvestScreen} options={{ headerShown: false }} />
      <InvestStack.Screen
        name="tickerInfo"
        component={tickerInfo}
        options={{
          headerLeft: () => <BackChevron />,
          title: 'Stock ticker info',
        }}
      />
      <InvestStack.Screen
        name="typeInfo"
        component={typeInfo}
        options={{
          headerLeft: () => <BackChevron />,
          title: 'Order type info',
        }}
      />
      <InvestStack.Screen
        name="tfInfo"
        component={tfInfo}
        options={{
          headerLeft: () => <BackChevron />,
          title: 'Time in force info',
        }}
      />
      <InvestStack.Screen
        name="slInfo"
        component={slInfo}
        options={{
          headerLeft: () => <BackChevron />,
          title: 'Stop loss info',
        }}
      />
    </InvestStack.Navigator>
  );
}

export default InvestStackNavigator;
