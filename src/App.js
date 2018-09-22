import React, { Component } from 'react';
import MainApp from './App/Dashboard_new'
import Web3 from 'web3'
import logo from './logo.svg';
import './App.css';


  var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));


class App extends Component {
  render() {   
    return (
      <div className="App">
      <MainApp web3 = {web3} />
      </div>
    );
  }
}

export default App;
