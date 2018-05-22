import React, { Component } from 'react';
import ddlogo from './ddlogo.png'
import Particles from 'react-particles-js'
import './App.css';
import './Home.css';
import ProjectCard from '../components/ProjectCard';
import patrolli from './patrolli.jpg';
import elevator from './elevator.jpg';
import pitch from './pitch.jpg';
import workout from './workout.jpg';

const traits =
  ["Full Stack Problem Solver", "Interactive Platform Developer",
    "Integrated Content Creator", "Web Designer", "Passionate Learner"]


class Home extends Component {
  constructor() {
    super()
    this.state = {traitIdx: 0 };
    }

    componentDidMount(){
      this.traitId = setInterval(() => {
        let currentIdx = this.state.traitIdx
        this.setState({traitIdx: ++currentIdx })
      }, 2000)
    }

    componentWillUnmount(){
      clearInterval(this.traitId);
    }

  render() {
    let traitChanger = traits[this.state.traitIdx % traits.length]
    return (
      <div className="App">
          <img src={ddlogo} className="main-logo" alt="logo" />
        <div className="intro-container">
            <p className="intro">DASHA DARIA</p>
            <div className="left-bracket">[</div>
            <div className="quote">{traitChanger}</div>
            <div className="right-bracket">]</div><br/>
            <div><button>Contact Me</button></div>
          </div>


            <div className="projects">
              <div className="projects-header">PROJECTS</div>
              <ProjectCard project="Virtual Elevator" image={elevator}/>
              <ProjectCard project="Pitch Or Ditch" image={pitch}/>
              <ProjectCard project="Workout Buddy" image={workout}/>
              <ProjectCard project="Flonase Sensimist and Focused" image={patrolli}/>
              <ProjectCard project="Trolli and SDCC" image={patrolli}/>
              <ProjectCard project="Dodge and Sharknado" image={patrolli}/>
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
