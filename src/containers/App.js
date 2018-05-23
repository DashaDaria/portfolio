import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import './App.css';
import Particles from 'react-particles-js'
import NavBar from '../components/NavBar';


const App = () => (
  <Router>
    <div>
    <NavBar />
      <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
      <Route path='/contact' component={Contact} />

      <Particles
        className="particles"
        params={{
          particles: {
            number: {value: 40}
          }
        }}
      />
    </div>
  </Router>
)

export default App;
