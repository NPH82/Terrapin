import React from "react";
import Navbar from "../../components/Navbar";

class AdminRecent extends React.Component {
  static defaultProps = {
    reported: 0,
    returnedData: "No Reports today!"
  }
  render() {
    return(
      <div className="container" style={{backgroundColor:"#f0eee5", height:"100vh", textAlign:"center", marginTop:-50}}>
      <Navbar/>
     <p className="App-intro" style={{fontSize:"4vh", color:"#977960", paddingTop:"15vh", paddingBottom:"5vh"}}>Recent Data</p>
     <div className="recent">
       <p clasName="description" style={{fontSize:"3vh", color:"#977960"}}>Past 24 Hours: {this.props.reported} Nests Reported.</p>
       <div>
         <p className="returnedData" style={{fontSize:"3vh", color:"#977960"}}>{this.props.returnedData}</p>
       </div>
     </div>
   </div>
    );
  }
};

export default AdminRecent;