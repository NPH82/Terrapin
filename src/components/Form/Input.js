import React from "react";

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
  
    this.handleChange = this.handleChange.bind(this);
  }

    handleChange(event) {
      this.setState({value: event.target.value});
    }

  render() {
    return(
      <div className="form-group" style={{textAlign:"center", marginBottom:30}}>
      <label style={{fontSize:25, color:"#977960"}}>{this.props.label}</label>
      <br/>
      <input
        style={{fontSize:25, width:"80%", border:"1px solid #000", borderRadius:"3px"}}
        type={this.props.type}
        value={this.state.value}
        placeholder={this.props.placeholder}
        onChange={this.handleChange}
      />
      </div>
    );
  }
};

export default Input;