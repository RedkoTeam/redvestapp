import React from "react";
import { headerOptions } from "redvest/util/styles";
import BackChevron from "redvest/components/BackChevron";

import { createStackNavigator } from "@react-navigation/stack";
import Invest from "redvest/screens/Invest/Invest";

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
    </InvestStack.Navigator>
  );
}

export default InvestStackNavigator;
