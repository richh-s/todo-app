import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';
import HomePage from './pages/Home'
const App = () => {
  return (
    <Router>
      {/* <Routes /> */}
      <HomePage/>
    </Router>
  );
};

export default App;
