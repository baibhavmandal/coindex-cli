const axios = require("axios");
const colors = require("colors");

class CryptoAPI {
  constructor(KEY) {
    this.KEY = KEY;
    this.baseURL = "https://rest.coinapi.io/v1/exchangerate";
  }

  async getPriceData(asset_id_base, asset_id_quote) {
    try {
      const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: asset_id_quote,
      });
      const res = await axios.get(
        `${this.baseURL}/${this.KEY}/${asset_id_base}/${asset_id_quote}`
      );

      const rate = formatter.format(res.data.rate);

      return `Coin : ${res.data.asset_id_base.yellow} | Price : ${rate.green} | Time : ${res.data.time.blue}`;
    } catch (error) {
      this.handleAPIError(error);
    }
  }

  handleAPIError(err) {
    if (err.response.status === 401) {
      throw new Error("Your API Key is invalid - Go to https://coinapi.io");
    } else if (err.response.status === 404) {
      throw new Error("Your API is not responding");
    } else {
      throw new Error("Something went wrong");
    }
  }
}

module.exports = CryptoAPI;
