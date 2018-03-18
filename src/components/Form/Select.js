import React from "react";

class Select extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'Data Fields'};
  
    this.handleChange = this.handleChange.bind(this);
  }

    handleChange(event) {
      this.setState({value: event.target.value});
    }

  render() {
    return(
      <div className="selectInput" style={{textAlign:"center", marginBottom:30}}>
        <label style={{fontSize:25, color:"#977960"}}>{this.props.label}</label>
        <br/>
        <select
          style={{fontSize:25, width:"80%", border:"1px solid #000", borderRadius:"3px"}}
          value={this.state.value}
          onChange={this.handleChange}
        />
        <option value="dataFields">Data Fields</option>
        <option value="date">Date</option>
        <option value="nestId">Nest ID</option>
        <option value="pitTagId">PIT tag ID</option>
        <option value="notchedId">Notched ID</option>
        <option value="nestRelocated">Nest Relocated</option>
      </div>
    );
  }
};

export default Select;