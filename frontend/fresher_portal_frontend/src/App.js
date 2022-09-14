import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ImportantInformationRoutes from "./pages/ImportantInformation/ImportantInformationRoutes";
import AdmittedStudents from "./pages/AdmittedStudents/AdmittedStudents";
import Home from "./pages/Home/Home";
import ContactUs from './pages/ContactUs/contactus';
import HostelsAndFacilitiesRoutes from './pages/HostelsAndFacilities/HostelsAndFacilities';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/important/*" element={<ImportantInformationRoutes />} />
        <Route path="/about" />
        <Route path="/contact" />
        <Route path="/admittedstudent" element={<AdmittedStudents />} />
        <Route path="/home" element={<Home />} />
        <Route path='/hostels/*' element={<HostelsAndFacilitiesRoutes />} />
        <Route path='/contactus' element={<ContactUs/>} />
      </Routes>
    </Router>
  );
};

export default App;
