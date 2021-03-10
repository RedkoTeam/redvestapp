import React, { useEffect, useState } from 'react';
import alpacaApi from 'redvest/services/alpacaApi';

const AlpacaAccountInfoContext = React.createContext();

export function AlpacaAccountInfoProvider({ children }) {
  const [buyingPower, setBuyingPower] = useState(0);
  const [cash, setCash] = useState(0);
  const [longMarketValue, setLongMarketValue] = useState(0);
  const [portfolioValue, setPortfolioValue] = useState(0);
  const [portfolioTimestamp, setPortfolioTimestamp] = useState([]);
  const [portfolioEquity, setPortfolioEquity] = useState([]);

  useEffect(() => {
    const api = alpacaApi();
    api.getAccount().then((response) => {
      if (response.ok) {
        setBuyingPower(response.data.buying_power);
        setLongMarketValue(response.data.long_market_value);
        setPortfolioValue(response.data.portfolio_value);
        setCash(response.data.cash);
      }
    });
    api.getPortfolioHistory().then((response) => {
      if (response.ok) {
        setPortfolioTimestamp(response.data.timestamp);
        setPortfolioEquity(response.data.equity);
      }
    });
  }, []);

  return (
    <AlpacaAccountInfoContext.Provider
      value={{
        buyingPower,
        cash,
        longMarketValue,
        portfolioValue,
        portfolioTimestamp,
        portfolioEquity,
      }}
    >
      {children}
    </AlpacaAccountInfoContext.Provider>
  );
}

export default AlpacaAccountInfoContext;
