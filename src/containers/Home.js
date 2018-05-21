import React, { Component } from 'react';
import ddlogo from './ddlogo.png'
import Particles from 'react-particles-js'
import './App.css';
import './Home.css';
import ProjectCard from '../components/ProjectCard';

class Home extends Component {


  render() {
    return (
      <div className="App">
          <img src={ddlogo} className="logo" alt="logo" />
          <div className="intro-container">
          <p className="intro">DASHA<br/><span className="daria">daria</span></p>
          <div className="characteristics">
            <p>[</p>
            <h2>Full Stack Problem Solver</h2>
            <p>]</p>
            </div>
            <br/><br/><br/><br/>
            <div className="projects">
            <h3>integrated content creator</h3>
              <ProjectCard project="Flonase Sensimist and Focused"/>
              <ProjectCard project="Trolli and SDCC"/>
              <ProjectCard project="Dodge and Sharknado"/>
            </div>
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
