import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Template from './Template';
import ResponsiveDrawer from '../../components/SideNav';

const ImportantInformationRoutes = () => {
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
          <Route path='/' element={<Template title='Provisional ID Card' />} />
          <Route
            path='/provisional'
            element={<Template title='Provisional ID Card' />}
          />
          <Route
            path='/antiragging'
            element={
              <Template
                title='Antiragging Affidavit'
                descriptionTitle='The necessary instructions for filling up the anti-ragging form is as follows:-'
              />
            }
          />
          <Route
            path='/hostelundertaking'
            element={
              <Template
                title='Hostel Undertaking'
                descriptionTitle='The instructions for hostel Undertakings for hostel residents are as follows:-'
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
};

export default ImportantInformationRoutes;
