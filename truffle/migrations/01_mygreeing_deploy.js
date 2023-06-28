const myGreeting = artifacts.require("MyGreeting");

require("dotenv").config({path: "../../.env"});

module.exports = function(deployer, network, accounts) {
    deployer.deploy(myGreeting, process.env.INITIAL_GREETING, {from: accounts[0]});
}
