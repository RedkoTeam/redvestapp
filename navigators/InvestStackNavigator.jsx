import React from 'react';
import { headerOptions } from 'redvest/util/styles';
import BackChevron from 'redvest/components/BackChevron';

import { createStackNavigator } from '@react-navigation/stack';
import InvestScreen from 'redvest/screens/invest/InvestScreen';
import StockTickerInfoScreen from 'redvest/screens/info/StockTickerInfoScreen';
import PriceInfoScreen from 'redvest/screens/info/PriceInfoScreen';
import QuantityInfoScreen from 'redvest/screens/info/QuantityInfoScreen';
import OrderTypeInfoScreen from 'redvest/screens/info/OrderTypeInfoScreen';
import TimeInForceInfoScreen from 'redvest/screens/info/TimeInForceInfoScreen';
import StopLossInfoScreen from 'redvest/screens/info/StopLossInfoScreen';

const InvestStack = createStackNavigator();

function InvestStackNavigator() {
  return (
    <InvestStack.Navigator screenOptions={headerOptions}>
      <InvestStack.Screen name="Invest" component={InvestScreen} options={{ headerShown: false }} />
      <InvestStack.Screen
        name="StockTickerInfo"
        component={StockTickerInfoScreen}
        options={{
          headerLeft: () => <BackChevron />,
          title: 'Stock ticker info',
        }}
      />
      <InvestStack.Screen
        name="PriceInfo"
        component={PriceInfoScreen}
        options={{
          headerLeft: () => <BackChevron />,
          title: 'Price info',
        }}
      />
      <InvestStack.Screen
        name="QuantityInfo"
        component={QuantityInfoScreen}
        options={{
          headerLeft: () => <BackChevron />,
          title: 'Quantity info',
        }}
      />
      <InvestStack.Screen
        name="OrderTypeInfo"
        component={OrderTypeInfoScreen}
        options={{
          headerLeft: () => <BackChevron />,
          title: 'Order type info',
        }}
      />
      <InvestStack.Screen
        name="TimeInForceInfo"
        component={TimeInForceInfoScreen}
        options={{
          headerLeft: () => <BackChevron />,
          title: 'Time in force info',
        }}
      />
      <InvestStack.Screen
        name="StopLossInfo"
        component={StopLossInfoScreen}
        options={{
          headerLeft: () => <BackChevron />,
          title: 'Stop loss info',
        }}
      />
    </InvestStack.Navigator>
  );
}

export default InvestStackNavigator;
