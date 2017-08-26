import React from 'react';
import { Component } from 'react';

class SecondaryMessage extends Component {
  render() {
    return (
      <h3 className={this.props.className}>
        {this.props.SecondaryMessage}
      </h3>
    );
  }
}

export default SecondaryMessage;