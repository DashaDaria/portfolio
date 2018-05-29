import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import About from '../components/About';
import './App.css';
import Particles from 'react-particles-js';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';


const App = () => (
  <Router>
    <div>
    <NavBar />
      <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />

      <Particles
        className="particles"
        params={{
          particles: {
            number: {value: 40}
          }
        }}
      />
      <Footer />
    </div>

  </Router>
)

export default App;
