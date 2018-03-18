import React from "react";

class FormBtn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
  
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    alert("this value was submitted: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <button
        onSubmit={this.handleSubmit}
        className="btn btn-default"
        style={{backgroundColor:"#637d8a", padding:"10px 0px", color:"#fff", width:"81%", fontSize:30, border:"1px solid #000", borderRadius:"3px"}}
      >
        {this.props.label}
      </button>
    );
  }
};

export default FormBtn;