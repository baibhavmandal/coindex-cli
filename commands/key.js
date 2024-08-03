const inquirer = require("inquirer");
const { prompt } = require("enquirer");
const colors = require("colors");
const KeyManager = require("../lib/KeyManager");
const { message } = require("telegraf/filters");
const isRequired = require("../utils/validation");

const key = {
  async set() {
    const keyManager = new KeyManager();
    const input = await prompt([
      {
        type: "input",
        name: "key",
        message: "Enter API Key".green + "-- https://coinapi.io",
        validate: isRequired,
      },
    ]);

    const key = await keyManager.setKey(input.key);

    console.log(key);
  },
  async show() {
    try {
      const keyManager = new KeyManager();
      const key = await keyManager.getKey();

      console.log("Current API Key : " + key.yellow);

      return key;
    } catch (error) {
      console.error(error.message.red);
    }
  },
  async remove() {
    try {
      const keyManger = new KeyManager();
      await keyManger.deleteKey();

      console.log("API Key Removed".blue);

      return;
    } catch (error) {
      console.error(error.message.red);
    }
  },
};

module.exports = key;
