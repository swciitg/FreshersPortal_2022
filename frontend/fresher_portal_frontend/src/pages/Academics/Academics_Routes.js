import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ResponsiveDrawer from './SideNav';
import AcadTemplates from './AcadTemplates';
import BoardTemplate from '../Student Organisation/BoardTemplate';
import AcadTemplate2 from './AcadTemplate2';

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
          <Route path='/' element={<AcadTemplate2 url='dept' />} />
          <Route path='/biosciences' element={<AcadTemplates url='bsbe' />} />
          <Route path='/chemical' element={<AcadTemplates url='cl' />} />
          <Route path='/chemistry' element={<AcadTemplates url='cst' />} />
          <Route path='/civil' element={<AcadTemplates url='ce' />} />
          <Route path='/computer' element={<AcadTemplates url='cse' />} />
          <Route path='/design' element={<AcadTemplates url='dod' />} />
          <Route path='/electronics' element={<AcadTemplates url='eee' />} />
          <Route path='/humanities' element={<AcadTemplates url='hss' />} />
          <Route path='/mathematics' element={<AcadTemplates url='mnc' />} />
          <Route path='/mechanical' element={<AcadTemplates url='me' />} />
          <Route path='/physics' element={<AcadTemplates url='ep' />} />
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
