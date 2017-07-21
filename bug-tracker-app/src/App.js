import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import BugTracker from './bug-Tracker/BugTracker';


class App extends Component {
  render() {
    return (

        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Bug Tracker</h2>
          </div>
          <BugTracker bugs={this.props.bugs} newBugAction={this.props.newBugAction} toggleBugAction={this.props.toggleBugAction} removeClosedAction={this.props.removeClosedAction}></BugTracker>
        </div>
        
      
    );
  }
}

export default App;
