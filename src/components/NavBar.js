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
      <NavLink exact activeClassName="active" to='/'><GoHome/></NavLink>
      <NavLink activeStyle={{color: '#387523'}} to='/about'><GoInfo/></NavLink>
      <NavLink activeStyle={{color: '#387523'}} to='/contact'><GoMail/></NavLink>
      <a target="_blank" href="https://github.com/DashaDaria"><GoMarkGithub/></a>
    </nav>
  )
}


export default NavBar;
