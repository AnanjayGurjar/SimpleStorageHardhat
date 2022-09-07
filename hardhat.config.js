require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
require("@nomiclabs/hardhat-etherscan");
require("./tasks/block-number");
require("hardhat-gas-reporter");

/** @type import('hardhat/config').HardhatUserConfig */

const RINKEBY_RPC_URL = process.env.RINKEBY_RPC_URL;
const RINKEBY_PRIVATE_KEY = process.env.RINKEBY_PRIVATE_KEY;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;
const LOCALHOST_RPC_URL = process.env.LOCALHOST_RPC_URL;
const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY;
module.exports = {
    defaultNetwork: "hardhat", //use hardhat unless specified
    networks: {
        rinkeby: {
            url: RINKEBY_RPC_URL,
            accounts: [RINKEBY_PRIVATE_KEY],
            chainId: 4,
        },
        localhost: {
            url: LOCALHOST_RPC_URL,
            //accounts: given by hardhat
            chainId: 31337,
        },
    },
    solidity: "0.8.7",
    etherscan: {
        apiKey: ETHERSCAN_API_KEY,
    },
    gasReporter: {
        enabled: true,
        outputFile: "gas-report.txt", //output the gas costs to the mentioned file
        noColors: true,
        currency: "USD",
        coinmarketcap: COINMARKETCAP_API_KEY, //api-key from CoinMarketCap to get price in usd
        // token: "MATIC",     //to get gas prices in terms of polygon, similiarly we can add any currency
    },
};
