import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import './App.css';


const isActiveFn = (match, location) => {
  return match
}

const Links = () => (
  <nav>
    <NavLink exact activeClassName="active" to='/'>Home</NavLink>
    <NavLink activeStyle={{color: 'green'}} to='/about'> About</NavLink>
    <NavLink
      isActive={isActiveFn}
      activeClassName="active"
      to='/contact'> Contact</NavLink>
  </nav>
)

const App = () => (
  <Router>
    <div>
      <Links />
      <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
      <Route path='/contact' component={Contact} />
    </div>
  </Router>
)

export default App;
