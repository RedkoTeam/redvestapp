import React, { useState, useEffect } from 'react';
import alpacaApi from 'redvest/services/alpacaApi';

const PositionsContext = React.createContext();

export function PositionsProvider({ children }) {
  const [positions, setPositions] = useState(null);

  useEffect(() => {
    alpacaApi()
      .getPositions()
      .then((response) => response.ok && setPositions(response.data));
  }, []);

  return <PositionsContext.Provider value={{ positions }}>{children}</PositionsContext.Provider>;
}

export default PositionsContext;
