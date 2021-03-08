import apisauce from 'apisauce';
import { ALPACA_ENDPOINT, ALPACA_API_CLIENT_KEY_ID, ALPACA_API_CLIENT_SECRET_KEY } from '@env';

const alpacaApi = (baseURL = ALPACA_ENDPOINT) => {
  const api = apisauce.create({
    baseURL: ALPACA_ENDPOINT,
    headers: {
      'APCA-API-KEY-ID': ALPACA_API_CLIENT_KEY_ID,
      'APCA-API-SECRET-KEY': ALPACA_API_CLIENT_SECRET_KEY,
    },
    timeout: 5000,
  });

  const getAccount = () => api.get('v2/account');
  const getPositions = () => api.get('v2/positions');
  const getAssets = () => api.get('v2/assets?status=active');
  const postOrder = (data) => api.post('v2/orders', data);

  return {
    getAccount,
    getPositions,
    getAssets,
    postOrder,
  };
};

export default alpacaApi;
