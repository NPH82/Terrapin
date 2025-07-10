import React from "react";
import { withRouter } from "react-router-dom";

import { SignUpLink } from "../CreateAccount/CreateAccount";
import { auth } from "../../firebase";
import * as routes from "../../constants/routes";

import  FormBtn from "../../components/Form/FormBtn";
import Input from "../../components/Form/Input";

const SignInPage = ({ history }) =>
  <div>
    <Welcome history={history} />
  </div>

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
}

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

class Welcome extends React.Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const {
      email,
      password,
    } = this.state;

    const {
      history,
      checkRateLimit,
    } = this.props;

    try {
      // Check rate limiting
      checkRateLimit();
      
      auth.doSignInWithEmailAndPassword(email, password)
        .then(() => {
          this.setState(() => ({ ...INITIAL_STATE }));
          history.push(routes.SIGN_IN);
        })
        .catch(error => {
          // Don't expose specific error details to prevent enumeration
          const genericError = new Error('Invalid email or password');
          this.setState(byPropKey('error', genericError));
        });
    } catch (rateLimitError) {
      this.setState(byPropKey('error', rateLimitError));
    }
      
    event.preventDefault();
  }

  render() {
    const {
      email,
      password,
      error,
    } = this.state;

    const isInvalid =
      password === '' ||
      email === '';

    return(
      <div className="container" style={{backgroundColor:"#f0eee5", height:"100vh", textAlign:"center", marginTop:-50}}>
        <p className="App-intro" style={{fontSize:"4vh", color:"#977960", paddingTop:"15vh", paddingBottom:"5vh"}}>Welcome</p>
        <div className="login">
          <form onSubmit={this.onSubmit}>
            <Input
              value={email}
              onChange={event => this.setState(byPropKey('email', event.target.value))}
              type="text" 
              placeholder="Email"
            />
            <Input
              value={password}
              onChange={event => this.setState(byPropKey('password', event.target.value))}
              type="password"
              placeholder="Password"
            />
            <FormBtn disabled={isInvalid} type="submit" label="Login" />
             
            { error && <p>{error.message}</p> }
          </form>
          
          <SignUpLink /> 
        </div>
      </div>
    );
  }
};

export default withRouter(SignInPage);

export {
  Welcome,
};