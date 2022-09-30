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
          <Route path='/' element={<Template url='alcheringa' />} />
          <Route path='/alcheringa' element={<Template url='alcheringa' />} />
          <Route path='/advaya' element={<Template url='advaya' />} />
          <Route
            path='/interhostelevents'
            element={<InterHostelEvents url='ihe' />}
          />
          <Route
            path='/interhostelevents/kriti'
            element={<Template url='kriti' />}
          />
          <Route
            path='/interhostelevents/manthan'
            element={<Template url='manthan' />}
          />
          <Route
            path='/interhostelevents/spardha'
            element={<Template url='spardha' />}
          />
          <Route path='/reflux' element={<Template url='reflux' />} />
          <Route path='/techniche' element={<Template url='techniche' />} />
          <Route path='/udgam' element={<Template url='udgam' />} />
        </Routes>
      </div>
    </div>
  );
};

export default EventsRoutes;
