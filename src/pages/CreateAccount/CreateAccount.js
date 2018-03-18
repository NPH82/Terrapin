import React from "react";
import  FormBtn from "../../components/Form/FormBtn";
import Input from "../../components/Form/Input";

class CreateAccount extends React.Component {
  render() {
    return(
      <div className="createAccount" style={{backgroundColor:"#f0eee5", height:"100vh", textAlign:"center"}}>
        <h1 style={{fontSize:"4vh", color:"#977960", paddingTop:"5vh", paddingBottom:"3vh"}}>Create Account</h1>
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
        <FormBtn label="Login"/>
        </form>
      </div>
    );
  }
};

export default CreateAccount;