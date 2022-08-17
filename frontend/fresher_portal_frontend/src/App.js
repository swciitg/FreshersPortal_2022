import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainNavigation from './MainNavigation';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<MainNavigation />} />
        <Route path='/about' />
        <Route path='/contact' />
      </Routes>
    </Router>
  );
};

export default App;
