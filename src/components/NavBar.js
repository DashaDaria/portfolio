import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css'
import GoHome from 'react-icons/lib/go/home';
import GoMarkGithub from 'react-icons/lib/go/mark-github';
import GoInfo from 'react-icons/lib/go/info';
import GoMail from 'react-icons/lib/go/mail';

const NavBar = () => {
  return (
    <nav className="navigation">
      <NavLink exact to='/'><GoHome/></NavLink>
      <NavLink  to='/about'><GoInfo/></NavLink>
      <a href="mailto:daria.a.nikitina@gmail.com" ><GoMail/></a>
      <a target="_blank" rel="noopener noreferrer" href="https://github.com/DashaDaria"><GoMarkGithub/></a>
    </nav>
  )
}


export default NavBar;
