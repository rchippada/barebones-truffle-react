import React, { Component } from 'react'
import Web3 from 'web3'
import MyGreeting from "./contracts/MyGreeting.json"
import './App.css'

class App extends Component {
  state = {loaded: false};

  // Create web3 provider and smart contract instance as the component is mounting
  componentDidMount = async () => {
    try {
      this.web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");
      this.accounts = await this.web3.eth.getAccounts();
      this.networkId = await this.web3.eth.net.getId();

      this.myGreetingInstance = new this.web3.eth.Contract( 
        MyGreeting.abi, // This is coming from the client/contract/MyGreeting.json file that was created when the contract was migrated and deployed
        MyGreeting.networks[this.networkId].address
      );

      this.initialGreeting = await this.myGreetingInstance.methods.getGreeting().call();
      this.setState({ loaded: true, greeting: this.initialGreeting });
    } catch (error) {
      alert("Failed to load Web3, accounts, and contracts. ", JSON.stringify(error));
    }
  }

  // This shows how to execute a web3 get call from the smart contract
  handleInputChange_Web3GetCall = (event) => {
    const target = event.target;
    const name = target.name;

    this.setState({[name]: target.value});
  }

  // This shows how to execute a web3 send call from the smart contract, that results in updating the blockchain
  handleUpdateGreeting_Web3SendCall = async(event) => {
    await this.myGreetingInstance.methods.updateGreeting(this.state.updated_greeting).send({from: this.accounts[0]});
    this.setState({["greeting"]: this.state.updated_greeting});
    this.setState({["updated_greeting"]: ""});
  }

  // Render the app. Add a text input and button to send to the smart contract
  render() {
    if(!this.state.loaded) {
      return <div>Loading Web3, accounts, and contracts</div>
    }
    return (
      <div className="App">
        <h1>Welcome to Web3 & React barebones dApp</h1><br/>
        <h2>{this.state.greeting}</h2><br/>
        <b>Respond: </b>
          <input type="text" name="updated_greeting" value={this.state.updated_greeting} onChange={this.handleInputChange_Web3GetCall}></input>
          &nbsp;<button type="button" onClick={this.handleUpdateGreeting_Web3SendCall}>Send Greeting</button>
      </div>
    );
  }
}

export default App;