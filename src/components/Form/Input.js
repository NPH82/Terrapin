import React from "react";

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '', error: ''};
  
    this.handleChange = this.handleChange.bind(this);
    this.validateInput = this.validateInput.bind(this);
  }

  validateInput(value, type) {
    // Basic XSS prevention
    const dangerousPatterns = /<script|javascript:|on\w+\s*=|data:text\/html/i;
    if (dangerousPatterns.test(value)) {
      return 'Invalid input detected';
    }

    // Type-specific validation
    switch(type) {
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(value) ? '' : 'Please enter a valid email address';
      case 'number':
        return isNaN(value) ? 'Please enter a valid number' : '';
      case 'password':
        const minLength = process.env.REACT_APP_PASSWORD_MIN_LENGTH || 8;
        return value.length < minLength ? `Password must be at least ${minLength} characters` : '';
      default:
        return '';
    }
  }

  handleChange(event) {
    const value = event.target.value;
    const error = this.validateInput(value, this.props.type);
    
    this.setState({value, error});
    
    // Call parent onChange if provided
    if (this.props.onChange) {
      this.props.onChange(event);
    }
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
          maxLength={this.props.maxLength || 255}
        />
        {this.state.error && (
          <div style={{color: 'red', fontSize: '14px', marginTop: '5px'}}>
            {this.state.error}
          </div>
        )}
      </div>
    );
  }
};

export default Input;