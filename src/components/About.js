import React from 'react';
import ddlogo from '../containers/ddlogo.png'
import './About.css';

const About = () => {
  return(
    <div className="about">
      <img src={ddlogo} className="about-logo" alt="logo" />
      <div className="about-intro">DASHA DARIA </div>
    </div>
  )
}

export default About;
