import React from 'react';
import './Footer.css'
import FaGithubSquare from 'react-icons/lib/fa/github-square';
import GoMail from 'react-icons/lib/go/mail';
import FaLinkedinSquare from 'react-icons/lib/fa/linkedin-square';


const Footer = () => {
  return (
    <footer className="dd-footer">
      <a target="_blank" rel="noopener noreferrer" href="https://github.com/DashaDaria"><FaGithubSquare size={25}/></a>
      <a href="mailto:daria.a.nikitina@gmail.com" ><GoMail size={25}/></a>
      <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/darianikitina/" ><FaLinkedinSquare size={25}/></a>
    </footer>
  )
}

export default Footer;
