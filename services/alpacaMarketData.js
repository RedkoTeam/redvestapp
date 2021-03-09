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

  const getRecentQuote = (symbol) => {
    const start = new Date(new Date().setSeconds(new Date().getSeconds() - 50));
    const end = new Date(new Date().setSeconds(new Date().getSeconds() - 0));
    return (
      api
        .get(`v2/stocks/${symbol}/quotes?start=${rfc3339(start)}&end=${rfc3339(end)}`)
        //.then(console.log)
        .then((result) => result.data?.quotes)
        .then((quotes) => quotes[quotes.length - 1].ap)
        .then((lastAskPriceString) => {
          if (typeof lastAskPriceString !== 'undefined')
            return Number.parseFloat(lastAskPriceString);
        })
        .then((lastAskPrice) => {
          if (typeof lastAskPrice === 'number' && lastAskPrice > 0)
            return `$${lastAskPrice.toFixed(2)}`;
          else return 'N/A';
        })
    );
  };

  return {
    getQuotes,
    getRecentQuote,
  };
};

export default alpacaMarketData;
