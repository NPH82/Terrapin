import React from "react";
import Input from "../../components/Form/Input";
import TextArea from "../../components/Form/TextArea";
import FormBtn from "../../components/Form/FormBtn";
import SelectNest from "../../components/Form/SelectNest";

class Nesting extends React.Component {
  static defaultProps={
    name: "Volunteer"
  }
  render() {
    return(
      <div className="container" style={{backgroundColor:"#f0eee5", height:"100%", textAlign:"center", marginTop:-50}}>
        <p className="App-intro" style={{fontSize:"4vh", color:"#977960", paddingTop:"3vh"}}>Welcome {this.props.name}</p>
        <div className="volunterrNesting"> 
          <form>
          <Input
            label="Nest ID"
            type="number" 
            name="nestId"
            placeholder="Enter ID #"
            value=''
          />
          <SelectNest label="Condition of Nest"/>
          <Input
            label="Notched ID Number"
            name="notchedIDNumber"
            type="number"
            placeholder="Enter ID #"
            value=''
          />
          <Input
            label="PIT tag ID Number"
            name="number"
            type="number"
            placeholder="Enter ID #"
            value=''
          />
          <Input
            label="Time Nested (if known)"
            name="timeNested"
            type="time"
            placeholder="HH:MM AM/PM"
            value=''
          />
          <Input
            label="Top Egg Depth"
            name="topEggDepth"
            type="number"
            placeholder=""
            value=''
          /> 
          <TextArea
            label="Other Field Notes"
            />   
          <FormBtn label="Submit Data"/>
          </form>
        </div>
      </div>
    );
  }
};

export default Nesting;