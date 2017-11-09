import React, {Component} from 'react'
import App from './App.js'

class Sum extends Component{

    state = {
      firstName: this.props.firstName,
      lastName: this.props.lastName,
      age: this.props.age,
      color: this.props.color,
      sport: this.props.sport,
      count: this.props.count,
    };

    render() {
      console.log('props bro: ', this.state);
      return (
        <div style={{margin: 'auto', width: 'auto', textAlign: 'center'}}>
          <h3> form #{this.state.count} </h3>
          <p> First Name: {this.state.firstName} </p>
          <p> Last Name: {this.state.lastName} </p>
          <p> Age: {this.state.age} </p>
          <p> Color:{this.state.color} </p>
          <p> Sport:{this.state.sport} </p>
        </div>
      );
    };
    
};
export default Sum;