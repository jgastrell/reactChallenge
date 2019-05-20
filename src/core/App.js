import React from 'react';
import logo from '../logo.svg';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { PrivateRoutes } from '../platform/routes';

const App = props => {
  return (
    <Router>
      <div>
        <div style={{display:'inline-block', position:'relative', bottom:'132px'}}>
          <img src={logo} className="App-logo" alt="logo" style={{ width:'50px', heigth: '50px'}}/>
        </div>
        <div style={{display:'inline-block', position:'relative', bottom:'125px'}}>
          <PrivateRoutes {...props}/>
        </div>
      </div>
    </Router>
  );
}

export default App;
