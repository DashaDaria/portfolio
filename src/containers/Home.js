import React, { Component } from 'react';
import ddlogo from './ddlogo.png'
import Particles from 'react-particles-js'
import './App.css';

class Home extends Component {
  render() {
    return (
      <div className="App">
          <img src={ddlogo} className="logo" alt="logo" />
        <div className="App-body">
        <p className="intro">DASHA<br/>(Daria)</p>
        <h2>"Full Stack Problem Solver"</h2>
        <br/>

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

export default Home;
