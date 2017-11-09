import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import axios from "axios"
import Summaries from './summaries';

class App extends Component {

    state = {
        summaries: [],
        firstName: "",
        lastName: "",
        age: "",
        color: "",
        sport: "",
        count: 1,
    };
    firstNameHandler = (e) => {
        this.setState({firstName: e.target.value})
    };
    lastNameHandler = (e) => {
        this.setState({lastName: e.target.value})
    };
    ageHandler = (e) => {
        this.setState({age: e.target.value})
    };
    colorHandler = (e) => {
        this.setState({color: e.target.value})
    };
    sportHandler = (e) => {
        this.setState({sport: e.target.value})
    };
    handleSubmit = (e) => {
        e.preventDefault();
        this.state.summaries.push(<Summaries
            key={this.state.summaries.length} handleSubmit={this.handleSubmit}
            firstName={this.state.firstName} lastName={this.state.lastName}
            age={this.state.age} color={this.state.color}
            sport={this.state.sport} count={this.state.count} />
            );
        this.state.count++
        this.setState({summaries: this.state.summaries});
        this.setState({firstName: '',lastName: '',age: '',color: '',});
    };
    render() {
        return ( 
            <div key='tester' style={{position: 'relative', float: 'center', width: 'auto'}}> 
            <h1 style={{margin: '0% 45%'}}>Form Demo</h1>
            <form key='testers' onSubmit={this.handleSubmit} style={{margin: '0% 43%'}}>
                <input type='text' value={this.state.firstName} placeholder='First Name' onChange={this.firstNameHandler}/>
                <br/>
                <input type='text' value={this.state.lastName} placeholder='Last Name' onChange={this.lastNameHandler}/>
                <br/>
                <input type='text' value={this.state.age} placeholder='Age' onChange={this.ageHandler}/>
                <br/>
                <input type='text' value={this.state.color} placeholder='Favorite Color' onChange={this.colorHandler}/>
                <br/>
                <input type='text' value={this.state.sport} placeholder='Sport' onChange={this.sportHandler}/>
                <br/>
                <input type='submit' value='submit' onClick={this.handlerClick}/>
            </form>
            {this.state.summaries}
            </div>
        );
    };
};

export default App