import React from 'react';
import { Component } from 'react';

class Button extends Component {
  render() {
    return (
      <button type="button" onClick={this.props.click}>
        Download
      </button>
    );
  }
}

export default Button;