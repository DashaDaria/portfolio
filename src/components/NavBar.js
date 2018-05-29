import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css'
import GoHome from 'react-icons/lib/go/home';
import GoInfo from 'react-icons/lib/go/info';

const NavBar = () => {
  return (
    <nav className="navigation">
      <NavLink exact to='/'><GoHome/></NavLink>
      <NavLink  to='/about'><GoInfo/></NavLink>
    </nav>
  )
}

export default NavBar;
