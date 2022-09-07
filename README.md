# Simple Storage Hardhat Project

This project demonstrates a basic Hardhat use case for the simple storage project. One can use the contract to store the number and fetch it

Try running some of the following tasks:

```shell
yarn hardhat help
yarn hardhat test
GAS_REPORT=true yarn hardhat test
yarn hardhat node
```
To run the code use:

for hardhat/default
```shell
yarn hardhat run scripts/deploy.js
```
for any other network(say rinkeby)
```shell
yarn hardhat run scripts/deploy.js --network rinkeby
```
### Libraries used

- Hardhat and all the libraries associated-> For project setup, tests, deployment etc
  ```shell
  yarn add --dev hardhat
  yarn hardhat
  ```
- Prettier -> For standard code formatting
  ```shell
  yarn add --prettier prettier-plugin-solidity
  ```
- dotenv -> for using environment variables
   ```shell
  yarn add --dev dotenv
  ```
- hardhat-etherscan -> for programatically verifying contract on etherscan
   ```shell
  yarn add --dev @nomiclabs/hardhat-etherscan
  ```
- hardhat-gas-reporter -> get attached to the tests and gives a idea about approx how much gas each of our function is using
  ```shell
  yarn add --dev hardhat-gas-reporter
  ```
- solidity-coverage -> goes through all the tests and reports how many lines of our contract are convered under those tests
  ```shell
  yarn add --dev solidity-coverage
  ```
