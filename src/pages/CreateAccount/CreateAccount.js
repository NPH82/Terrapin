import React from "react";
import  FormBtn from "../../components/Form/FormBtn";
import Input from "../../components/Form/Input";
import { Link, withRouter } from "react-router-dom";
import { auth } from '../../firebase';
import * as routes from '../../constants/routes';

const SignUpPage = ({ history }) =>
 <div>
   <CreateAccount history={history} />
 </div>

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  phoneNumber: '',
  error: null,
}

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

class CreateAccount extends React.Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE};
  }

  onSubmit = (event) => {
    const {
      username,
      email,
      passwordOne,
    } = this.state;

    const {
      history,
    } = this.props;
    
    auth.doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        this.setState(() => ({ ...INITIAL_STATE }));
        history.push(routes.SIGN_IN);
      })
      .catch(error => {
        this.setState(byPropKey('error', error));
      });

    event.preventDefault();
  }

  render() {
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      phoneNumber,
      error,
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      username === '';

    return(
    
      <div className="container" style={{backgroundColor:"#f0eee5", height:"100vh", textAlign:"center", marginTop:-50}}>
        <p className="App-intro" style={{fontSize:"4vh", color:"#977960", paddingTop:"15vh", paddingBottom:"5vh"}}>Create Account</p>
        <div className="createAccount">
          <form onSubmit={this.onSubmit}>
          <Input
            value={username}
            onChange={event => this.setState(byPropKey('username', event.taget.value))}
            type="text"
            placeholder="Name"
          />
          <Input
            value={email}
            onChange={event => this.setState(byPropKey('email', event.target.value))}
            type="text"
            placeholder="Enter Email"
          />
          <Input
            value={passwordOne}
            onChange={event => this.setState(byPropKey('passwordOne', event.target.value))}
            type="password"
            placeholder="Password"
          />
          <Input
            value={passwordTwo}
            onChange={event => this.setState(byPropKey('passswordTwo', event.target.value))}
            type="password"
            placeholder="Confirm Password"
          />
          <Input
            value={phoneNumber}
            onChange={event => this.setState(byPropKey('phoneNumber', event.target.value))}
            type="number"
            placeholder="555-555-5555"
          />    
          <FormBtn disabled={isInvalid} type="submit" label="Submit"/>

          { error && <p>{error.message}</p> }
          </form>
        </div>
      </div>
    );
  }
};

const SignUpLink = () =>
  <p>
    Don't have an account?
    {' '}
  <Link to={routes.CREATE_ACCOUNT}>Create an Account</Link>
  </p>

export default withRouter(SignUpPage);

export {
  CreateAccount,
  SignUpLink,
}