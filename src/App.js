import React, { Component } from 'react';
import './App.css';
import  Welcome from "./pages/Welcome";
// import CreateAccount from "./pages/CreateAccount";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Diamondback Terrapin Nesting App</h1>
        </header>
        <Welcome/>
        {/* <CreateAccount/> */}
        
      </div>
    );
  }
}

export default App;
