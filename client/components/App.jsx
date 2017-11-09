import React from 'react';
import { Component } from 'react';

import axios from 'axios';

/*** Components ***/
import Header from './Header.jsx';
import Form from './Form.jsx';
//This component is the main section of the web page
import Main from './Main.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      download: {
        packageJson: {
          name: 'name',
          author: 'author',
        },
        webpackConfig: {
          outputFileName: 'bundle.js',
          useSass: false,
          fileLoader: false,
          webpackImageLoader: false,
        },
        dirSelection: {
          assets: false,
          components: false,
          style: false,
        }
      },
      //styles
      displayCtaModal: false
    };
  }

  //Display form when call to action button is clicked
  toggleModal = (e) => {
    this.setState({ displayCtaModal: true });
  }
  //Closes the cta modal, but it'd be cool if toggleModal and toggleModalClose a single function;
  toggleModalClose = () => {
    this.setState({ displayCtaModal: false });
  }
  //This changes the state.download data that will be send to the server via post request.
  handleFormChange = (e) => {
    let downloadClone = this.state.download;
    //Conditional for changing value of packageJson object inside state
    if (e.target.name === 'name') {
      downloadClone.packageJson.name = e.target.value;
      this.setState({download: downloadClone});
    }
    if (e.target.name === 'author') {
      downloadClone.packageJson.author = e.target.value;
      this.setState({download: downloadClone});
    }
    //Conditional for changing value of webpackConfig object inside state
    if (e.target.name === 'outputFileName') {
      downloadClone.webpackConfig.outputFileName = e.target.value;
      this.setState({download: downloadClone});
    }
    if (e.target.name === 'useSass') {
      downloadClone.webpackConfig.useSass = e.target.checked;
      this.setState({download: downloadClone});
    }
    if (e.target.name === 'fileLoader') {
      downloadClone.webpackConfig.fileLoader = e.target.checked;
      this.setState({download: downloadClone});
    }
    if (e.target.name === 'webpackImageLoader') {
      downloadClone.webpackConfig.webpackImageLoader = e.target.checked;
      this.setState({download: downloadClone});
    }
    //Conditional for changing value of dirSelection object inside state
    if (e.target.name === 'components') {
      downloadClone.dirSelection.components = e.target.checked;
      this.setState({download: downloadClone});
    }
    if (e.target.name === 'style') {
      downloadClone.dirSelection.style = e.target.checked;
      this.setState({download: downloadClone});
    }
    if (e.target.name === 'assets') {
      downloadClone.dirSelection.assets = e.target.checked;
      this.setState({download: downloadClone});
    }
  }
  
  //This function downloads the zipped file.
  handleDownload = (e) => {
    axios.post('http://localhost:3000/', this.state.download)
      .then((err, response) => {
        if(err) console.log(err)
        console.log('this is response');
        window.location = '/download';
      });
  }

  //This clears the text input field when it's in focus
  handleInputFocus = (e) => {
    if (e.target.name.toLowerCase() === e.target.value.toLowerCase()) {
      e.target.value = '';
    }
  }

  render() {
    console.log('hey there', this.state.displayCtaModal)
    if (!this.state.displayCtaModal) {
      return (
        <div className="container">
          <Header />
          <Main toggleModal={this.toggleModal}/>
        </div>
      );
    } else {
      return (
        <Form height="100%"
            name={this.state.download.packageJson.name}
            author={this.state.download.packageJson.author}
            outputFileName={this.state.download.webpackConfig.outputFileName}
            useSass={this.state.download.webpackConfig.useSass}
            fileLoader={this.state.download.webpackConfig.fileLoader}
            webpackImageLoader={this.state.download.webpackConfig.webpackImageLoader}
  
            components={this.state.download.dirSelection.components}
            style={this.state.download.dirSelection.style}
            assets={this.state.download.dirSelection.assets}
  
            displayCtaModal={this.state.displayCtaModal}
            toggleModal={this.toggleModal}
            toggleModalClose={this.toggleModalClose}
  
            handleFormChange={this.handleFormChange}
            handleInputFocus={this.handleInputFocus}
            clickDownload={this.handleDownload}/>
      );
    }
  }
}

export default App;