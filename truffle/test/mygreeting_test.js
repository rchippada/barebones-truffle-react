// MyGreeting test

require("dotenv").config({path: "../../.env"});

const truffleAssert = require('truffle-assertions');

const myGreeting = artifacts.require("MyGreeting");

contract('myGreeting', (accounts) => {
    it("should respond to greeting", async() => {
        const accounts = await web3.eth.getAccounts();

        let greetingInstance = await myGreeting.deployed();

        let greeting = await greetingInstance.getGreeting();
        assert.equal(greeting, process.env.INITIAL_GREETING, "Expected initial greeting to be hello");

        let newGreeting = "How are you doing?"
        let txResult = await greetingInstance.updateGreeting(newGreeting);
        truffleAssert.eventEmitted(txResult, "GreetingUpdatedEvent");

        greeting = await greetingInstance.getGreeting();
        assert.equal(greeting, newGreeting, "Expected greeting to be the new greeting");
    })
})
