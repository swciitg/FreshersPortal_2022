import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ResponsiveDrawer from './SideNav';
import Template from './Template';

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
          <Route path='/' element={<Template url='provisional' />} />
          <Route path='/provisional' element={<Template url='provisional' />} />
          <Route path='/antiragging' element={<Template url='antiragging' />} />
          <Route
            path='/hostelundertaking'
            element={<Template url='hostel' />}
          />
          <Route path='/bonafide' element={<Template url='bonafide' />} />
          <Route path='/codeofconduct' element={<Template url='code' />} />
          <Route path='/guidelines' element={<Template url='photo' />} />
          <Route
            path='/iitggirlscollective'
            element={<Template url='girls' />}
          />
          <Route
            path='/permanentidentity'
            element={<Template url='permanent' />}
          />
          <Route path='/portal' element={<Template url='personal' />} />
        </Routes>
      </div>
    </div>
  );
};

export default ImportantInformationRoutes;
