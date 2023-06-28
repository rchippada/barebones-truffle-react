# Barebones dApp with truffle smart contract and react client

* This repository can be used as a sample to build a Web3.0 dApp

* It consists of a smart contract named `MyGreeting.sol` in `Solidity` using `truffle` and `ganache`

* It also provides a barebones `react` client application to interact with the smart contract

## The Solidity smart contract

* The code for the smart contract and the associtated config files can be found in the `truffle` directory

* If you would like to clear out the sample `MyGreeting.sol` and start over, run `truffle init` in the `truffle` folder, which will create the directory structure with `contracts`, `migrations`, `truffle-config.js` etc. If you do this, make sure to add `contracts_build_directory: "../client/src/contracts"` in `truffle-config.js -> module.export`. See the attached `truffle-config.js` for an example

### To build the smart contract

* This repository uses the `ganache` environemnt to test. You can also use `develop` or `dashboard` environments if you prefer

* Run `ganache` in one terminal

* In another terminal, run `truffle console --network ganache` to enter truffle console pointing to the ganache environment
  * Run `migrate` and `test` commands from within the console to deploy and test the smart contract
  * The migrate and test commands can also be run outside the console by directly referencing the ganache network
    * `truffle migrate --network ganache`
    * `truffle test --network ganache`

* Running the migrate command results in building the smart contract json in the `client/contracts` folder, which can be used to connect the client with the smart contract

## The React client app

* The included client app is very minimal in nature. If you like, you can remove the entire contents of the client app and start over using `create-react-app <app-name>`. If you do this, make sure to add the web3 related bits to the `App.js` file. See the attached `App.js` for example

* Update the `App.js` to interact with your smart contract. This example interacts with the `MyGreeting` smart contract

* Run `npm install` and `npm start` commands to start the client at `http://localhost:3000`

