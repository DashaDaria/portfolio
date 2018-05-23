import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css'

const NavBar = () => {
  return (
    <nav>
      <NavLink exact activeClassName="active" to='/'>Home</NavLink>
      <NavLink activeStyle={{color: 'green'}} to='/about'> About</NavLink>
      <NavLink activeStyle={{color: 'green'}} to='/contact'>Contact</NavLink>
    </nav>
  )
}


export default NavBar;
