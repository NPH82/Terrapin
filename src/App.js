import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, } from "react-router-dom";
import SignInPage from "./pages/Welcome";
import SignUpPage from "./pages/CreateAccount";
import AdminWelcome from "./pages/Admin/AdminWelcome";
import Nesting from "./pages/Nesting/Nesting";
import Navigation from "./components/Navigation";
import * as routes from "./constants/routes";
import PasswordForgetPage from "./pages/PasswordForget";
import withAuthentication from "./components/Authentication/withAuthentication"
// import AdminMap from "./pages/Admin/AdminMap";
// import AdminRecent from "./pages/Admin/AdminRecent";
// import AdminArchived from "./pages/Admin/AdminArchived";
// import AdminNesting from "./pages/Nesting/AdminNesting"

const App = () =>
  <Router>
    <div>
      <Navigation authUser={this.state.authUser} />
           
      <hr/>
      
      <Route 
        exact path={routes.SIGN_IN} 
        component={() => <SignInPage />}
      />
      <Route 
        exact path={routes.CREATE_ACCOUNT}
        component={() => <SignUpPage />}
      />
      <Route 
        exact path={routes.ADMIN_HOME} 
        component={() => <AdminWelcome />}
      />
      <Route 
        exact path={routes.NESTING}
        component={() => <Nesting />}
      />
      <Route
        exact path={routes.PASSWORD_FORGET}
        component={() => <PasswordForgetPage />}
      />  
  {/* <Route exact path="/admin/map" component={AdminMap}/>
      <Route exact path="/admin/recent" component={AdminRecent}/>
      <Route exact path="/admin/archive" component={AdminArchived}/>
      <Route exact path="/admin/nesting" component={AdminNesting}/> */}
    </div>
  </Router>
 

export default withAuthentication(App);
