import React from 'react';
import { BrowserRouter as Router, Route, hashHistory, IndexRoute} from 'react-router-dom'
import App from './containers/App';
import Home from './containers/Home';

export default (
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home}/>
    </Route>
  </Router>
);
