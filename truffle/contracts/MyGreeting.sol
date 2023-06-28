// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.20;

contract MyGreeting {
    event GreetingUpdatedEvent(address indexed from, string greeting);

    string public myGreeting;

    constructor(string memory greeting) {
        myGreeting = greeting;
    }
    
    function getGreeting() public view returns(string memory) {
        return myGreeting;
    }
    function updateGreeting (string memory greeting) public {
        myGreeting = greeting;
        emit GreetingUpdatedEvent(msg.sender, greeting);
    }
}