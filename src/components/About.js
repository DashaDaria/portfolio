import React from 'react';
import ddlogo from '../containers/ddlogo.png'
import './About.css';
import dd from './dd.jpg'
import Footer from '../components/Footer';


const About = () => {
  return(
    <div>
      <div className="about">
      <img src={ddlogo} className="about-logo" alt="logo" />
      <div className="about-intro">DASHA DARIA </div>
      </div>

      <div className="about-flex">
        <img className="about-img" src={dd} alt=""/>
        <p className="about-content">
        Skilled professional with experience in advertising campaign management, sponsorship building, and strategic media planning. Known as a reliable, collaborative, and a creative worker who meets strict deadlines and the highest work standards.
          <br/><br/>Passionate about learning, not afraid of taking risks and stepping outside of my comfort zone. Currently working on transitioning from a career in advertising/marketing to a career in software development. Excited to merge my current strategic media development knowledge with my technical programming skills to build innovative tools that help boost business growth.
          <br/><br/>Technical skills include: Ruby, Ruby-on-Rails, SQL, Javascript, jQuery, ES6, React, Redux, Sinatra, HTML5, CSS3
           <br/><a className="about-button" href="mailto:daria.a.nikitina@gmail.com">Reach Out</a>
        </p>
      </div>
  </div>
  )
}

export default About;
