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
          justifyContent: 'center',
        }}
      >
        <Routes>
          <Route
            path='/'
            element={
              <Template title='Provisional ID Card' children='some lmba data' />
            }
          />
          <Route
            path='/provisional'
            element={
              <Template title='Provisional ID Card' children='some lmba data' />
            }
          />
          <Route
            path='/antiragging'
            element={
              <Template
                title='Antiragging Affidavit'
                children='some lmba data'
              />
            }
          />
          <Route
            path='/hostelundertaking'
            element={
              <Template title='Hostel Undertaking' children='some lmba data' />
            }
          />
        </Routes>
      </div>
    </div>
  );
};

export default ImportantInformationRoutes;
