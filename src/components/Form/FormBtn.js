import React from "react";

class FormBtn extends React.Component {
  render() {
    return (
      <button
        className="btn btn-default"
        style={{backgroundColor:"#637d8a", padding:"10px 0px", color:"#fff", width:"50%", fontSize:30, border:"10 #000"}}
        onClick={this.props.handleClick}>
        {this.props.label}
      </button>
    );
  }
};

export default FormBtn;