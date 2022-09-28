import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ResponsiveDrawer from './SideNav';
import Facilities from './Facilities';
import Hostel from './Hostel';
import Template from './Template';

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
          <Route path='/' element={<Hostel />} />
          <Route path='/barak' element={<Template url='bk' />} />
          <Route path='/bramhaputra' element={<Template url='bp' />} />
          <Route path='/dhansiri' element={<Template url='dns' />} />
          <Route path='/dibang' element={<Template url='db' />} />
          <Route path='/dihing' element={<Template url='dh' />} />
          <Route path='/disang' element={<Template url='ds' />} />
          <Route path='/kameng' element={<Template url='ka' />} />
          <Route path='/kapili' element={<Template url='kp' />} />
          <Route path='/manas' element={<Template url='ms' />} />
          <Route path='/lohit' element={<Template url='lh' />} />
          <Route path='/siang' element={<Template url='sg' />} />
          <Route path='/subansiri' element={<Template url='sns' />} />
          <Route path='/umiam' element={<Template url='um' />} />
          <Route path='/facilities' element={<Facilities />} />
        </Routes>
      </div>
    </div>
  );
};

export default HostelsAndFacilitiesRoutes;
