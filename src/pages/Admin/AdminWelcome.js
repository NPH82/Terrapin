import React from "react";
import Navbar from "../../components/Navbar";
import DataMap from "../../components/Map";
import Select from "../../components/Form/Select";
import FormBtn from "../../components/Form/FormBtn";

class AdminWelcome extends React.Component {
  static defaultProps = {
    name: "Administration",
    reported: 0
  }
  render() {
    return (
      <div className="container" style={{backgroundColor:"#f0eee5", height:"100vh", textAlign:"center", marginTop:-50}}>
         <Navbar/>
        <p className="App-intro" style={{fontSize:"4vh", color:"#977960", paddingTop:"15vh", paddingBottom:"5vh"}}>Welcome {this.props.name}</p>
        <div className="admin">
          <p clasName="query" style={{fontSize:"3vh", color:"#977960"}}>What can I help you find?</p>
          <Select/>
          <p className="todayData" style={{fontSize:"3vh", color:"#977960"}}>Today's Data: {this.props.reported} Nests Reported</p>
          <FormBtn
            label="Enter New Data"
            />
        </div>
      </div>
    );
  }
};

export default AdminWelcome;
