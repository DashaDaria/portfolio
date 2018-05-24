import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css'
import GoHome from 'react-icons/lib/go/home';
import GoMarkGithub from 'react-icons/lib/go/mark-github';

const NavBar = () => {
  return (
    <nav>
      <NavLink exact activeClassName="active" to='/'><GoHome/></NavLink>
      <NavLink activeStyle={{color: '#387523'}} to='/about'> About</NavLink>
      <NavLink activeStyle={{color: '#387523'}} to='/contact'>Contact</NavLink>
      <a target="_blank" href="https://github.com/DashaDaria"><GoMarkGithub/></a>
    </nav>
  )
}


export default NavBar;
