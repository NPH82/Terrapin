import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import  Welcome from "./pages/Welcome";
import CreateAccount from "./pages/CreateAccount";
import AdminWelcome from "./pages/Admin/AdminWelcome";

const App = () => 
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Diamondback Terrapin Nesting</h1>
          </header>
          {/* <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p> */}
          
            <Switch>
              <Route exact path="/" component={Welcome}/>>
              <Route exaxt path="/account" component={CreateAccount}/>
              <Route exact path="/admin" component={AdminWelcome}/>
            </Switch>
        </div>
      </Router>;

export default App;
