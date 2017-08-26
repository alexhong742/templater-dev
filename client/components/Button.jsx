import React from 'react';
import { Component } from 'react';

class Button extends Component {
  render() {
    return (
      <button 
        className={this.props.className}
        type="button" 
        onClick={this.props.click}>
        {this.props.buttonName}
      </button>
    );
  }
}

export default Button;