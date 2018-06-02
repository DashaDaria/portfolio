import React from 'react';
import ddlogo from '../containers/ddlogo.png'
import './About.css';
import dd from './dd.jpg'
import GoRuby from 'react-icons/lib/go/ruby';
import IoSocialCss3 from 'react-icons/lib/io/social-css3'
import TiHtml5 from 'react-icons/lib/ti/html5'
import IoSocialJavascript from 'react-icons/lib/io/social-javascript'
import FaGitlab from 'react-icons/lib/fa/gitlab'
import FaGit from 'react-icons/lib/fa/git'


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
        I am a seasoned media business professional who discovered a new world of inspiration on my journey to becoming a full stack web developer through the <a className="flatiron" target="_blank" rel="noopener noreferrer" href="https://flatironschool.com/">Flatiron School</a>. I am passionate about learning code, stepping outside of my comfort zone and facing challenges head on.
          <br/><br/>I bring +7 years of experience in advertising campaign management, sponsorship development and strategic digital media planning. I am excited to merge my current knowledge with my programming skills in backend and frontend frameworks (my favorite are Ruby-on-Rails and React with Redux) to build innovative tools that contribute to a company’s bottom line. I am currently looking for an opportunity to join a robust team where I can leverage my creative and technical skills.
          <br/><br/>Technical skills include: <span className="skills"> <GoRuby size={25}/> <IoSocialJavascript size={25} /> <IoSocialCss3 size={25}/> <TiHtml5 size={25}/> <FaGitlab size={25}/> <FaGit size={25}/></span>
          <br/><a className="about-button" href="mailto:daria.a.nikitina@gmail.com">Connect with me</a>
        </p>
      </div>
  </div>
  )
}

export default About;
