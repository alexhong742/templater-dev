import React from 'react';
import { Component } from 'react';

/*** Components ***/
import Button from './Button.jsx';

class Form extends Component {
  render() {
    return (
      <form>
        <h3>Basics</h3>
        <input type="text" name="name" value={this.props.name} onChange={ this.props.handleFormChange} />
        <input type="text" name="author" value={this.props.author} onChange={ this.props.handleFormChange} />
        <h3>Select Components</h3>
        <input type="checkbox" name="components" value={this.props.components} onChange={ this.props.handleFormChange}/>
        <h3>Select Style</h3>
        <input type="checkbox" name="style" value={this.props.style} onChange={ this.props.handleFormChange} />
        <h3>Select Assets</h3>
        <input type="checkbox" name="assets" value={this.props.assets} onChange={ this.props.handleFormChange} />
        <h3>Select Build</h3>
        <input type="checkbox" name="build" value={this.props.build} onChange={ this.props.handleFormChange} />
        <Button click={this.props.clickDownload} onChange={ this.props.handleFormChange} />
      </form>
    );
  }
}

export default Form;