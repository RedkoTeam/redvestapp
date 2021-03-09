import React, { useState, useEffect } from 'react';
import alpacaApi from 'redvest/services/alpacaApi';

const AssetsContext = React.createContext();

export function AssetsProvider({ children }) {
  const [stockTickers, setStockTickers] = useState([]);

  useEffect(() => {
    (async () => {
      await alpacaApi()
        .getAssets()
        .then((response) => setStockTickers(response.data));
    })();
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

export default AssetsContext;
