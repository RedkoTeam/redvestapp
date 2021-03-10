import apisauce from "apisauce";
import config from "../config";

// const alpacaApi = (baseURL = config.BASE_URL) => {
const alpacaApi = () => {
  const api = apisauce.create({
    baseURL: config.BASE_URL,
    headers: {
      "APCA-API-KEY-ID": config.ALPACA_API_KEY_ID,
      "APCA-API-SECRET-KEY": config.ALPACA_API_SECRET_KEY,
    },
    timeout: 5000,
  });

  const getAccount = async () => {
    let data = null;
    try {
      await api
        .get("v2/account")
        .then((res) => {
          data = res;
        })

        .catch((err) => console.log(err));
    } catch (error) {
      return false;
    }
    return data;
  };
  // const getAccount = () => api.get("v2/account");

  const getPositions = () => api.get("v2/positions");
  //const response = yield call(api.get("v2/account"));
  return {
    getAccount,
    getPositions,
    //  response
  };
};

export default alpacaApi;
