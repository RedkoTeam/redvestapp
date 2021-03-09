import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import alpacaApi from 'redvest/services/alpacaApi';

function Dashboard() {
  const [buyingPower, setBuyingPower] = useState(0);
  const [cash, setCash] = useState(0);
  const [longMarket, setLongMarket] = useState(0);
  const [portfolioValue, setPortfolioValue] = useState(0);

  useEffect(() => {
    console.log('fetch data from alpaca');
    const api = alpacaApi();
    api.getAccount().then((response) => {
      console.log(response);
      if (response.ok) {
        setBuyingPower(response.data.buying_power);
        setLongMarket(response.data.long_market_value);
        setPortfolioValue(response.data.portfolio_value);
        setCash(response.data.cash);
      }
    });
  }, []);

  return (
    <View>
      <Text>Dashboard Screen</Text>

      <View>
        <Text>Buying Power</Text>
        <Text>{buyingPower}</Text>
        <Text>Long Market Value</Text>
        <Text>{longMarket}</Text>
        <Text>Portfolio Value</Text>
        <Text>{portfolioValue}</Text>
        <Text>Cash</Text>
        <Text>{cash}</Text>
      </View>
    </View>
  );
}

export default Dashboard;
