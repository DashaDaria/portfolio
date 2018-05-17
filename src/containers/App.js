import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';

const App = () => (
  <Router>
    <div>
      <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
    </div>
  </Router>
)

export default App;
