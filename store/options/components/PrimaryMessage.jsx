import React from 'react';
import { Component } from 'react';

class PrimaryMessage extends Component {
  render() {
    return (
      <h2 className={this.props.className}>
        {this.props.PrimaryMessage}
      </h2>
    );
  }
}

export default PrimaryMessage;