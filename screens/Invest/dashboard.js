import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';

function Dashboard() {
  

  return (
    <View>
      <Text>Dashboard Screen</Text>

      <View>
        <Text>Buying Power</Text>
        {/*<Text>{buyingPower}</Text>*/}
        <Text>Long Market Value</Text>
        {/*<Text>{longMarket}</Text>*/}
        <Text>Portfolio Value</Text>
        {/*<Text>{portfolioValue}</Text>*/}
        <Text>Cash</Text>
        {/*<Text>{cash}</Text>*/}
      </View>
    </View>
  );
}

export default Dashboard;
