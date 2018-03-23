import React from "react";
import  FormBtn from "../../components/Form/FormBtn";
import Input from "../../components/Form/Input";
import { Link } from "react-router-dom";

class Welcome extends React.Component {
  static defaultProps = {
    name: "Volunteer"
  }
  render() {
    return(
      <div className="container" style={{backgroundColor:"#f0eee5", height:"100vh", textAlign:"center", marginTop:-50}}>
        <p className="App-intro" style={{fontSize:"4vh", color:"#977960", paddingTop:"15vh", paddingBottom:"5vh"}}>Welcome {this.props.name}</p>
        <div className="login">
          
          <form>
            <Input
              label="Email"
              type="text" 
              name="email"
              placeholder="Email"
              value=''
            />
            <Input
              label="Password"
              name="password"
              type="password"
              placeholder="Password"
              value=''
            />
            <Link to="/nesting">
              <FormBtn label="Login"/>
            </Link>
            </form>
          <p>Need to create and account? <Link to="/account">Click Here</Link></p>
        </div>
      </div>
    );
  }
};

export default Welcome;