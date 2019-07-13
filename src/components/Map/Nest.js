import React from "react";

class Nest extends React.Component {
  static defaultProps = {};
  render() {
    return (
      <div className="coords" style={{height:10, width:10, backgroundColor:"red", color:"white", textAlign:"center", padding:2, borderRadius:45}}>
        {this.props.text}
        <div style={{visibility:"hidden"}}>
          {this.props.lat}
          {this.props.lng}
        </div>
      </div>
    );
  }
};

export default Nest;