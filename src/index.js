import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import './containers/App.css';
import Favicon from 'react-favicon';


ReactDOM.render(
  <div>
    <Favicon url="./ddlogo.png" /> 
    <App />
  </div>
  ,
  document.getElementById('root')
  );
