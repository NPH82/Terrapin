import React from "react";
import  FormBtn from "../../components/Form/FormBtn";
import Input from "../../components/Form/Input";
import { Link } from "react-router-dom";

class CreateAccount extends React.Component {
  render() {
    return(
    
      <div className="container" style={{backgroundColor:"#f0eee5", height:"100vh", textAlign:"center", marginTop:-50}}>
        <p className="App-intro" style={{fontSize:"4vh", color:"#977960", paddingTop:"15vh", paddingBottom:"5vh"}}>Create Account</p>
        <div className="createAccount">
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
          <Input
            label="Confirm Password"
            name="password"
            type="password"
            placeholder="Re-enter Password"
            value=''
          />
          <Input
            label="Name"
            name="name"
            type="text"
            placeholder="Name"
            value=''
          />
          <Input
            label="Phone Number"
            name="phoneNumber"
            type="number"
            placeholder="Phone Number"
            value=''
          />    
          <FormBtn label="Submit"/>
          </form>
          <p>Back to <Link to="/">Login</Link></p>
        </div>
      </div>
    );
  }
};

export default CreateAccount;