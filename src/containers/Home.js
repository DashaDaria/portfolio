import React, { Component } from 'react';
import ddlogo from './ddlogo.png'
import Particles from 'react-particles-js'
import './App.css';
import './Home.css';
import ProjectCard from '../components/ProjectCard';
import patrolli from './patrolli.jpg';
import elevator from './elevator.jpg';


class Home extends Component {


  render() {
    return (
      <div className="App">
          <img src={ddlogo} className="main-logo" alt="logo" />
        <div className="intro-container">
            <p className="intro">DASHA<br/><span className="daria">daria</span></p>
            <div className="left-bracket">[</div>
            <div className="quote">Full Stack Problem Solver</div>
            <div className="right-bracket">]</div>
            <div><button>Contact Me</button></div>
          </div>

            <div className="web-projects">
            <h3 className="project-category">interactive <br/>web <br/>developer
              <img src={ddlogo} className="logo-tag" alt="logo" />
            </h3>
              <ProjectCard project="Virtual Elevator" image={elevator}/>
              <ProjectCard project="Pitch Or Ditch"/>
              <ProjectCard project="Workout Buddy"/>
            </div>

            <div className="marketing-projects">
            <h3 className="project-category">integrated <br/>content <br/>creator
              <img src={ddlogo} className="logo-tag" alt="logo" />
            </h3>
              <ProjectCard project="Flonase Sensimist and Focused" image={patrolli}/>
              <ProjectCard project="Trolli and SDCC"/>
              <ProjectCard project="Dodge and Sharknado"/>
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
