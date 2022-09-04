import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ContactUs from './pages/ContactUs/contactus';
import HostelsAndFacilitiesRoutes from './pages/HostelsAndFacilities/HostelsAndFacilities';
import ImportantInformationRoutes from './pages/ImportantInformation/ImportantInformationRoutes';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/important/*' element={<ImportantInformationRoutes />} />
        <Route path='/hostels/*' element={<HostelsAndFacilitiesRoutes />} />
        <Route path='/contactus' element={<ContactUs/>} />
        <Route path='/about' />
        <Route path='/contact' />
      </Routes>
    </Router>
  );
};

export default App;
