import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ImportantInformationRoutes from "./pages/ImportantInformation/ImportantInformationRoutes";
import AdmittedStudents from "./pages/AdmittedStudents/AdmittedStudents";
import Home from "./pages/Home/Home";
import ContactUs from './pages/ContactUs/contactus';
import HostelsAndFacilitiesRoutes from './pages/HostelsAndFacilities/HostelsAndFacilities';
import StudentOrganisationRoutes from "./pages/Student Organisation/Student Organisation Routes";
import AcademicsRoutes from "./pages/Academics/Academics"
import EventsRoutes from "./pages/Events/events"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/important/*" element={<ImportantInformationRoutes />} />
        <Route path="/about" />
        <Route path="/contact" />
        <Route path="/admittedstudent" element={<AdmittedStudents />} />
        <Route path="/" element={<Home />} />
        <Route path='/hostels/*' element={<HostelsAndFacilitiesRoutes />} />
        <Route path='/contactus' element={<ContactUs/>} />
        <Route path='/studentorganisation/*' element={<StudentOrganisationRoutes/>} />
        <Route path='/academics/*' element={<AcademicsRoutes/>} />
        <Route path='/events/*' element={<EventsRoutes/>} />
        

      </Routes>
    </Router>
  );
};

export default App;
