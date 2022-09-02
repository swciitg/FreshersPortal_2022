import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ImportantInformationRoutes from './pages/ImportantInformation/ImportantInformationRoutes';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/important/*' element={<ImportantInformationRoutes />} />
        <Route path='/about' />
        <Route path='/contact' />
      </Routes>
    </Router>
  );
};

export default App;
