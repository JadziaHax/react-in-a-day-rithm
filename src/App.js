import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-bar ">
          <div>
            <h1>Here Comes The Sun</h1>
          </div>
        </div>
        <h2>Forecast</h2>
          <ul>
            <li>Tomorrow, April 30th: Sunny, 70/55, 0% Chance of Rain</li>
            <li>May 1st: Overcast, 60/50, 100% Chance of Revolt</li>
          </ul>
      </div>
    );
  }
}

export default App;
