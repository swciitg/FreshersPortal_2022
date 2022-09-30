import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ImportantInformationRoutes from './pages/ImportantInformation/ImportantInformationRoutes';
import AdmittedStudents from './pages/AdmittedStudents/AdmittedStudents';
import Home from './pages/Home/Home';
import ContactUs from './pages/ContactUs/contactus';
import HostelsAndFacilitiesRoutes from './pages/HostelsAndFacilities/HostelsAndFacilities';
import StudentOrganisationRoutes from './pages/Student Organisation/StudentOrganisationRoutes';
import EventsRoutes from './pages/Events/EventsRoutes';
import AcademicsRoutes from './pages/Academics/Academics_Routes';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<AdmittedStudents />} />
        <Route path='/important/*' element={<ImportantInformationRoutes />} />
        <Route path='/academics/*' element={<AcademicsRoutes />} />
        <Route path='/hostels/*' element={<HostelsAndFacilitiesRoutes />} />
        <Route path='/events/*' element={<EventsRoutes />} />
        <Route
          path='/studentorganisation/*'
          element={<StudentOrganisationRoutes />}
        />
        <Route path='/contactus' element={<ContactUs />} />
      </Routes>
    </Router>
  );
};

export default App;
