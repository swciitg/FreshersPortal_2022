import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ResponsiveDrawer from './SideNav';
import AcadTemplates from './AcadTemplates';
import BoardTemplate from '../Student Organisation/BoardTemplate';
import BoardTemplate2 from '../Student Organisation/BoardTemplate2';

const AcademicsRoutes = () => {
  return (
    <div style={{ display: 'flex' }}>
      <ResponsiveDrawer />

      <div
        style={{
          width: '100%',
          position: 'relative',
          top: '80px',
          display: 'flex',
          justifyContent: 'left',
        }}
      >
        <Routes>
          <Route path='/' element={<BoardTemplate2 url='dept' />} />
          <Route path='/bsbe' element={<AcadTemplates url='bsbe' />} />
          <Route path='/cl' element={<AcadTemplates url='cl' />} />
          <Route path='/cst' element={<AcadTemplates url='cst' />} />
          <Route path='/civil' element={<AcadTemplates url='ce' />} />
          <Route path='/cse' element={<AcadTemplates url='cse' />} />
          <Route path='/design' element={<AcadTemplates url='dod' />} />
          <Route path='/eee' element={<AcadTemplates url='eee' />} />
          <Route path='/hss' element={<AcadTemplates url='hss' />} />
          <Route path='/mnc' element={<AcadTemplates url='mnc' />} />
          <Route path='/mech' element={<AcadTemplates url='me' />} />
          <Route path='/phy' element={<AcadTemplates url='ep' />} />
          <Route
            path='/branchchange'
            element={<BoardTemplate url='branch' />}
          />
          <Route path='/minor' element={<BoardTemplate url='minor' />} />
        </Routes>
      </div>
    </div>
  );
};

export default AcademicsRoutes;
