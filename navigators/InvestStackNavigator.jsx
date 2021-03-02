import React from "react";
import { headerOptions } from "redvest/util/styles";
import BackChevron from "redvest/components/BackChevron";

import { createStackNavigator } from "@react-navigation/stack";
import Invest from "redvest/screens/invest/Invest";
import tickerInfo from "redvest/screens/info/tickerInfo";
import typeInfo from "redvest/screens/info/typeInfo";
import tfInfo from "redvest/screens/info/tfInfo";
import slInfo from "redvest/screens/info/slInfo";

const InvestStack = createStackNavigator();

function InvestStackNavigator() {
  return (
    <InvestStack.Navigator screenOptions={headerOptions}>
      <InvestStack.Screen
        name="Invest"
        component={Invest}
        options={{
          headerLeft: () => <BackChevron />,
          title: "Invest Screen",
        }}
      />
      <InvestStack.Screen name="tickerInfo" component={tickerInfo} />
      <InvestStack.Screen name="typeInfo" component={typeInfo} />
      <InvestStack.Screen name="tfInfo" component={tfInfo} />
      <InvestStack.Screen name="slInfo" component={slInfo} />
    </InvestStack.Navigator>
  );
}

export default InvestStackNavigator;
