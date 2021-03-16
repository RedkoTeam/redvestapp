import React, { useState, useEffect } from 'react';
import alpacaApi from 'redvest/services/alpacaApi';

const OrdersContext = React.createContext();

export function OrdersProvider({ children }) {
  const [orders, setOrders] = useState(null);

  useEffect(() => {
    alpacaApi()
      .getOrders()
      .then((response) => response.ok && setOrders(response.data));
  }, []);

  return <OrdersContext.Provider value={{ orders }}>{children}</OrdersContext.Provider>;
}

export default OrdersContext;
