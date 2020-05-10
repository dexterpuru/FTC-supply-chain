const HDWallet = require("truffle-hdwallet-provider");
// const infuraKey = "8ce002f57082462296cfa2665767df82";

// const fs = require("fs");
const mnemonic =
  "tunnel exist series neck trash face furnace analyst raccoon worry radio panda";

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 9545,
      network_id: "*", // Match any network id
    },
    rinkbey: {
      provider: () =>
        new HDWallet(
          mnemonic,
          "https://rinkeby.infura.io/v3/8ce002f57082462296cfa2665767df82"
        ),
      network_id: 4,
      gas: 4500000,
      gasPrice: 10000000000,
    },
  },
};
