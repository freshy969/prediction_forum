import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Prediction Forum powered by TINO IQ</h1>
        </header>
        <p className="App-intro">
          Make predictions, submit analysis, and discuss with other users
        </p>
        <div>The prediction feed will go here</div>
      </div>
    );
  }
}

export default App;
