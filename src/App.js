import React, { Component } from 'react';
import GridSystem from './GridSystem';
import ddlogo from './ddlogo.png'
import Particles from 'react-particles-js'
import { Header } from 'semantic-ui-react'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <img src={ddlogo} className="logo" alt="logo" />
        <div className="App-body">
        <p className="intro">DASHA<br/>(Daria)</p>
        <h2>"Full Stack Problem Solver"</h2>
        <br/>
        <GridSystem />
        </div>

        <Particles
          className="particles"
          params={{
            particles: {
              number: {value: 40}
            }
          }}
        />
      </div>
    );
  }
}

export default App;
