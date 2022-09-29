import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ResponsiveDrawer from './SideNav';
import Template from './Template';
import InterHostelEvents from './InterHostelEvents';

const EventsRoutes = () => {
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
          <Route path='/' element={<Template url='alc' />} />
          <Route path='/alcheringa' element={<Template url='alc' />} />
          <Route path='/advaya' element={<Template url='adv' />} />
          <Route
            path='/interhostelevents'
            element={<InterHostelEvents url='ihe' />}
          />
          <Route
            path='/interhostelevents/kriti'
            element={<Template url='krt' />}
          />
          <Route
            path='/interhostelevents/manthan'
            element={<Template url='mnt' />}
          />
          <Route
            path='/interhostelevents/spardha'
            element={<Template url='spd' />}
          />
          <Route path='/reflux' element={<Template url='ref' />} />
          <Route path='/techniche' element={<Template url='tec' />} />
          <Route path='/udgam' element={<Template url='udm' />} />
        </Routes>
      </div>
    </div>
  );
};

export default EventsRoutes;
