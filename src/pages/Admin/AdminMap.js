import React from "react";
import Navbar from "../../components/Navbar";
import DataMap from "../../components/Map";

class AdminMap extends React.Component {
  render() {
    return (
      <div className="container" style={{backgroundColor:"#f0eee5", height:"100vh", textAlign:"center", marginTop:-50}}>
         <Navbar/>
        <p className="App-intro" style={{fontSize:"4vh", color:"#977960", paddingTop:"15vh", paddingBottom:"5vh"}}>Reported Nest Locations</p>
        <div className="adminMap">
          <p className="description" style={{fontSize:"3vh", color:"#977960"}}>Click on Marker for more information.</p>
          <DataMap/>
        </div>
      </div>
    );
  }
};

export default AdminMap;