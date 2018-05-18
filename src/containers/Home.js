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
          <p className="intro">DASHA<br/><span className="daria">daria</span></p>
        <div className="characteristics">
          <h2>Full Stack Problem Solver</h2>
          <br/>
          <h2>integrated content creator</h2>
            <ProjectCard project="Flonase Sensimist and Focused"/>
            <ProjectCard project="Trolli and SDCC"/>
            <ProjectCard project="Dodge and Sharknado"/>
          <h2>interactive platform developer</h2>
            <ProjectCard project="Virtual Elevator"/>
            <ProjectCard project="Pitch or Ditch"/>
            <ProjectCard project="Workout Buddy"/>
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
