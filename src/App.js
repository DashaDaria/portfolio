import React, { Component } from 'react';
import GridSystem from './GridSystem';
import ddlogo from './ddlogo.png'
import Particles from 'react-particles-js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <img src={ddlogo} className="logo" alt="logo" />
        <div className="App-body">
        <GridSystem />
        </div>

        <Particles
          className="particles"
          params={{
            particles: {
              number: {value: 30}
            }
          }}
        />
      </div>
    );
  }
}

export default App;
