import React, { Component } from 'react';
import GridSystem from './GridSystem';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Dasha Daria</h1>
        </header>
        <p className="App-intro">
          About
        </p>
        <GridSystem />
      </div>
    );
  }
}

export default App;
