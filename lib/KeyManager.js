// const Configstore = require("configstore");
const pkg = require("../package.json");

class KeyManager {
  constructor() {
    this.conf = null;
    this.configstorePromise = this.loadConfigstore();
  }

  async loadConfigstore() {
    // using dynamic import
    const { default: Configstore } = await import("configstore");

    this.conf = new Configstore(pkg.name);
  }

  async ensureConf() {
    if (!this.conf) {
      await this.configstorePromise;
    }
  }

  async setKey(key) {
    await this.ensureConf();
    this.conf.set("apiKey", key);

    return key;
  }

  async getKey() {
    await this.ensureConf();
    const key = this.conf.get("apiKey");

    if (!key) {
      throw new Error("No API Key Found - Get a key at https://coinapi.io");
    }

    return key;
  }

  async deleteKey() {
    await this.ensureConf();
    const key = this.conf.get("apiKey");

    if (!key) {
      throw new Error("No API Key Found - Get a key at https://coinapi.io");
    }

    this.conf.delete("apiKey");

    return;
  }
}

module.exports = KeyManager;
