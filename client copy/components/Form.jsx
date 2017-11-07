import React from 'react';
import { Component } from 'react';

/*** Components ***/
import Button from './Button.jsx';

class Form extends Component {
  render() {
    console.log('rendering')
    return (
      <form>
        <h2>Template Setup:</h2>
        <div className="close"
          onClick={this.props.toggleModalClose}></div>
        <div className="input input-1">
          <h3>Package.json Setup:</h3>
          <div className="text-input">
            <p>Project Name:</p>
            <input type="text"  name="name" 
              value={this.props.name} 
              onChange={ this.props.handleFormChange}
              onFocus={this.props.handleInputFocus} />
          </div>
          <div className="text-input">
            <p>Project Author:</p>
            <input type="text" name="author" 
              value={this.props.author} 
              onChange={ this.props.handleFormChange}
              onFocus={this.props.handleInputFocus} />
          </div>
        </div>

        <div className="input input-2">
          <h3>Webpack Setup:</h3>
          <div className="text-input">
            <p>Output File Name:</p>
            <input type="text" name="outputFileName"
              value={this.props.outputFileName} 
              onChange={ this.props.handleFormChange}
              onFocus={this.props.handleInputFocus} />
          </div>
          <div className="input-group-1">
            <div className="checkbox-input">
              <p>Use Sass:</p>
              <input type="checkbox" name="useSass" 
                value={this.props.useSass} 
                onChange={ this.props.handleFormChange}/>
            </div>
            <div className="checkbox-input">
              <p>File Loader:</p>
              <input type="checkbox" name="fileLoader" 
                value={this.props.fileLoader} 
                onChange={ this.props.handleFormChange} />
            </div>
            <div className="checkbox-input">
              <p>Webpack Image Loader:</p>
              <input type="checkbox" name="webpackImageLoader" 
                value={this.props.webpackImageLoader} 
                onChange={ this.props.handleFormChange}
                disabled={this.props.webpackImageLoader ? true:false} />
            </div>
          </div>
        </div>

        <div className="input input-3">
          <h3>Resource Setup:</h3>
          <div className="checkbox-input">
            <p>Select Components:</p>
            <input type="checkbox" name="components" 
              value={this.props.components} 
              onChange={ this.props.handleFormChange}/>
          </div>
          <div className="checkbox-input">
            <p>Select Style:</p>
            <input type="checkbox" name="style" 
              value={this.props.style} 
              onChange={ this.props.handleFormChange} />
          </div>
          <div className="checkbox-input">
            <p>Select Assets:</p>
            <input type="checkbox" name="assets" 
              value={this.props.assets} 
              onChange={ this.props.handleFormChange} />
          </div>
        </div>
        <Button 
          buttonName="Download" 
          type="button"
          click={this.props.clickDownload} 
          onChange={ this.props.handleFormChange} />
      </form>
    );
  }
}

export default Form;