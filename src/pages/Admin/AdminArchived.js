import React from "react";
import Navbar from "../../components/Navbar";

class AdminArchived extends React.Component {
  static defaultProps = {
    returnedData: "No data has been archived yet."
  }
  render() {
    return(
      <div className="container" style={{backgroundColor:"#f0eee5", height:"100vh", textAlign:"center", marginTop:-50}}>
      <Navbar/>
     <p className="App-intro" style={{fontSize:"4vh", color:"#977960", paddingTop:"15vh", paddingBottom:"5vh"}}>Archived Data</p>
     <div className="archived">
       <div className="archivedData">
         <p className="returnedData" style={{fontSize:"3vh", color:"#977960"}}>{this.props.returnedData}</p>
       </div>
     </div>
   </div>
    );
  }
};

export default AdminArchived;