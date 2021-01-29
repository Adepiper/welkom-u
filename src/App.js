import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';

import Routes from './Routes';

function App() {
  return (
    <Router>
      <Routes />
    </Router>
  );
}

export default App;
