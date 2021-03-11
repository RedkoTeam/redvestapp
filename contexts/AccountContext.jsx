import React, { useState, useEffect } from 'react';
import alpacaApi from 'redvest/services/alpaca';

const AccountContext = React.createContext();

export function AssetsProvider({ children }) {
  const [stockTickers, setStockTickers] = useState([]);

  useEffect(() => {
    (async () => {
      const api = await alpacaApi();
      await api.getAssets().then((response) => setStockTickers(response.data));
    })();
    console.log(stockTickers);
  }, []);

  return (
    <AssetsContext.Provider
      value={{
        stockTickers,
      }}
    >
      {children}
    </AssetsContext.Provider>
  );
}

export default AccountContext;