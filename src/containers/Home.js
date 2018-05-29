import React, { Component } from 'react';
import ddlogo from './ddlogo.png'
import './App.css';
import './Home.css';
import ProjectCard from '../components/ProjectCard';
import patrolli from './patrolli.jpg';
import elevator from './elevator.jpg';
import pitch from './pitch.jpg';
import workout from './workout.jpg';
import vibelist from './vibelist.jpg';
import content from './content.jpg';
import dodge from './dodge.jpg';
import wedding from './wedding.jpg';


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
        <div className="intro-container">
            <img src={ddlogo} className="main-logo" alt="logo" />
            <div className="intro">DASHA DARIA </div>
            <div className="quote">{traitChanger}</div>
          </div>

            <div className="projects">
              <ProjectCard project="Virtual Elevator"
                topline="Smart elevator built with React" image={elevator} link="https://virtual-elevator.herokuapp.com/"/>

              <ProjectCard project="Pitch Or Ditch"
                topline="Brainstorming tool built with Rails, React, Redux" image={pitch} link="https://github.com/DashaDaria/pitch-or-ditch-client"/>

              <ProjectCard project="Workout Buddy"
                topline="Workout tracker built with Ruby-on-Rails and jQuery" image={workout} link="https://workout-buddy-rails.herokuapp.com/"/>

              <ProjectCard project="VibeList"
                topline="Mobile prototype built for a Hackathon" image={vibelist} link="https://devpost.com/software/vibelist"/>

              <ProjectCard project="Wedding Makeup Site"
                topline="Desktop and mobile site redesign" image={wedding} link="http://www.amandawhite.co.uk/pro-team/"/>

              <ProjectCard project="Trolli and Comic-Con Live"
              topline="Development of a fully integrated sponsorship" image={patrolli} link="https://vimeo.com/271568537"/>

              <ProjectCard project="Dodge and Sharknado"
                topline="Custom content takeover across all media channels" image={dodge} link="http://view.ceros.com/nbcu/sharknado-dodge-main/p/1"/>

              <ProjectCard project="Content Creation"
                topline="Production of custom brand-centric content" image={content} link="https://drive.google.com/file/d/1ZGu4hsWsjZjdyifvR82zM4uJH3j-zf2q/view?usp=sharing"/>
            </div>

      </div>
    );
  }
}

export default Home;
