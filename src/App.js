import React, { Component } from 'react';
import './App.css';
import FormBtn from "./components/Form";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Terrapin Nesting App</h1>
        </header>
        <p className="App-intro">
          This going to be the landing page.
        </p>
        <FormBtn label="Login"/>
        <FormBtn label="Enter New Data"/>
      </div>
    );
  }
}

export default App;
