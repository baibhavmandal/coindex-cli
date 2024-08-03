const KeyManager = require("../lib/KeyManager");
const CryptoAPI = require("../lib/CryptoAPI");
const check = {
  async price(cmd) {
    try {
      const keyManager = new KeyManager();
      const key = await keyManager.getKey();

      const api = new CryptoAPI(key);
      const priceOutputDate = await api.getPriceData(cmd.coin, cmd.cur);

      console.log(priceOutputDate);
    } catch (error) {
      console.error(error.message);
    }
  },
};

module.exports = check;
