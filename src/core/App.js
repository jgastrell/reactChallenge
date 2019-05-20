import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { PrivateRoutes } from '../platform/routes';
import Header from '../platform/shared/header';

const App = props => {
  return (
    <Router>
      <div>
        <Header {...props}/>
        <PrivateRoutes {...props}/>
      </div>
    </Router>
  );
}

export default App;
