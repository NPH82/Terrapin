import React from "react";

class SelectNest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: "Protected"};
  
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
        >
        <option value="protected">Protected- nest caged and marked with ID tag</option>
        <option value="wild">Wild- egg shards still in chamber or uncaged nest</option>
        <option value="depredated">Depredated- egg shards on surface, no viable eggs</option>
        <option value="partiallyDepredated">Partially Depredated- remaining eggs caged</option>
        </select>
      </div>
    );
  }
};

export default SelectNest;