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
          <Route path='/' element={<Template url='pid' />} />
          <Route path='/provisional' element={<Template url='pid' />} />
          <Route path='/antiragging' element={<Template url='ar' />} />
          <Route path='/hostelundertaking' element={<Template url='hu' />} />
          <Route path='/bonafide' element={<Template url='bf' />} />
          <Route path='/codeofconduct' element={<Template url='coc' />} />
          <Route path='/guidelines' element={<Template url='gui' />} />
          <Route path='/iitggirlscollective' element={<Template url='igc' />} />
          <Route path='/permanentidentity' element={<Template url='per' />} />
          <Route path='/portal' element={<Template url='por' />} />
        </Routes>
      </div>
    </div>
  );
};

export default ImportantInformationRoutes;
