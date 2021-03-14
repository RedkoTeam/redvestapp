import apisauce from 'apisauce';
import {
  ALPACA_API_ENDPOINT,
  ALPACA_API_CLIENT_KEY_ID,
  ALPACA_API_CLIENT_SECRET_KEY,
  ALPACA_TOKEN_ENDPOINT,
} from '@env';

const alpacaApi = (baseURL = ALPACA_API_ENDPOINT) => {
  const api = apisauce.create({
    baseURL,
    headers: {
      'APCA-API-KEY-ID': ALPACA_API_CLIENT_KEY_ID,
      'APCA-API-SECRET-KEY': ALPACA_API_CLIENT_SECRET_KEY,
    },
    timeout: 5000,
  });

  const getAccount = () => api.get('v2/account');
  const getPortfolioHistory = () => api.get('v2/account/portfolio/history');
  const getPositions = () => api.get('v2/positions');
  const getAssets = () => api.get('v2/assets?status=active');
  const getOrders = () => api.get('v2/orders');
  const postOrder = (data) => api.post('v2/orders', data);
  const cancelOrder = (order_id) => api.post(`v2/orders/${order_id}`);
  const alpacaExchangeToken = (params) => authApi.post(ALPACA_TOKEN_ENDPOINT, params);

  return {
    getAccount,
    getPortfolioHistory,
    getPositions,
    getAssets,
    getOrders,
    postOrder,
    cancelOrder,
    alpacaExchangeToken,
  };
};

export default alpacaApi;
