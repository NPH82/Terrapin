import React from "react";

class TextArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'Enter Notes'};
  
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
      <textarea
        style={{fontSize:25, width:"80%", border:"1px solid #000", borderRadius:"3px"}}
        value={this.state.value}
        onChange={this.handleChange}
      />
      </div>
    );
  }
};

export default TextArea;