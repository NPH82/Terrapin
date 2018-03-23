import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import  Welcome from "./pages/Welcome";
import CreateAccount from "./pages/CreateAccount";
import AdminWelcome from "./pages/Admin/AdminWelcome";
import AdminMap from "./pages/Admin/AdminMap";
import AdminRecent from "./pages/Admin/AdminRecent";
import AdminArchived from "./pages/Admin/AdminArchived";
import Nesting from "./pages/Nesting/Nesting";
import AdminNesting from "./pages/Nesting/AdminNesting"

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
              <Route exact path="/" component={Welcome}/>
              <Route exaxt path="/account" component={CreateAccount}/>
              <Route exact path="/admin" component={AdminWelcome}/>
              <Route exact path="/admin/map" component={AdminMap}/>
              <Route exact path="/admin/recent" component={AdminRecent}/>
              <Route exact path="/admin/archive" component={AdminArchived}/>
              <Route exact path="/nesting" component={Nesting}/>
              <Route exact path="/admin/nesting" component={AdminNesting}/>
            </Switch>
        </div>
      </Router>;

export default App;
