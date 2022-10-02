import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ResponsiveDrawer from './SideNav';
import Facilities from './Facilities';
import Template from './Template';
import BoardTemplate from '../StudentOrganisation/BoardTemplate';

const HostelsAndFacilitiesRoutes = () => {
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
          <Route path='/' element={<BoardTemplate url='hostel' />} />
          <Route path='/barak' element={<Template url='barak' />} />
          <Route path='/bramhaputra' element={<Template url='brahmaputra' />} />
          <Route path='/dhansiri' element={<Template url='dhansiri' />} />
          <Route path='/dibang' element={<Template url='dibang' />} />
          <Route path='/dihing' element={<Template url='dihing' />} />
          <Route path='/disang' element={<Template url='disang' />} />
          <Route path='/kameng' element={<Template url='kameng' />} />
          <Route path='/kapili' element={<Template url='kapili' />} />
          <Route path='/manas' element={<Template url='manas' />} />
          <Route path='/lohit' element={<Template url='lohit' />} />
          <Route path='/siang' element={<Template url='siang' />} />
          <Route path='/subansiri' element={<Template url='subansiri' />} />
          <Route path='/umiam' element={<Template url='umiam' />} />
          <Route path='/facilities' element={<Facilities />} />
        </Routes>
      </div>
    </div>
  );
};

export default HostelsAndFacilitiesRoutes;
