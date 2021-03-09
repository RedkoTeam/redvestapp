import apisauce from 'apisauce';
import {
  ALPACA_MARKET_DATA_ENDPOINT,
  ALPACA_API_CLIENT_KEY_ID,
  ALPACA_API_CLIENT_SECRET_KEY,
} from '@env';
import rfc3339 from 'redvest/util/rfc3339';

const alpacaMarketData = (baseURL = ALPACA_MARKET_DATA_ENDPOINT) => {
  const api = apisauce.create({
    baseURL,
    headers: {
      'APCA-API-KEY-ID': ALPACA_API_CLIENT_KEY_ID,
      'APCA-API-SECRET-KEY': ALPACA_API_CLIENT_SECRET_KEY,
    },
  });

  const getQuotes = (symbol, start, end) =>
    api.get(`v2/stocks/${symbol}/quotes?start=${rfc3339(start)}&end=${rfc3339(end)}`);

  const getRecentQuote = async (symbol) => {
    const start = new Date(new Date().setSeconds(new Date().getSeconds() - 50));
    const end = new Date(new Date().setSeconds(new Date().getSeconds() - 0));
    const lastAskPrice = await getQuotes(symbol, start, end)
      .then((result) => result.data?.quotes)
      .then((quotes) => quotes[quotes?.length - 1]?.ap)
      .then(console.log)
      .catch(console.log);
    return lastAskPrice > 0 ? lastAskPrice : 0;
  };

  return {
    getQuotes,
    getRecentQuote,
  };
};

export default alpacaMarketData;
