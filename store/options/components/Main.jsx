import React from 'react';
import { Component } from 'react';

/*** Components ***/
import Form from './Form.jsx';

class Main extends Component {
  render() {
    return (
      <main>
        <Form 
          Name={this.props.name}
          Author={this.props.author}
          assets={this.props.assets}
          components={this.props.components}
          style={this.props.style}
          build={this.props.build}
          handleFormChange={this.props.handleFormChange}
          clickDownload={this.props.clickDownload}/>
      </main>
    );
  }
}

export default Main;