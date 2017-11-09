import React from 'react';
import { Component } from 'react';

/*** Components ***/
import Div from './Div.jsx';
import PrimaryMessage from './PrimaryMessage.jsx';
import SecondaryMessage from './SecondaryMessage.jsx';
import Button from './Button.jsx';

class Main extends Component {
  render() {
    //This variable is used for conditional rendering for the form component
    let displayCtaModal = this.props.displayCtaModal;
    return (

      <main style={{height: "100%"}}>
        <Div 
          className="main-image"/>
        <PrimaryMessage 
          className="primary-message"
          PrimaryMessage="Create beautiful React App fast and furious"/>
        <SecondaryMessage
          className="secondary-message"
          SecondaryMessage="A set of customizable React templates that helps developers to create beautiful App with few clicks"/>
        <Button 
          type="submit"
          className="cta"
          buttonName="Download Template"
          click={this.props.toggleModal}/>
        {displayCtaModal === true}
      </main>
    );
  }
}

export default Main;