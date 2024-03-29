import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ResponsiveDrawer from './SideNav';
import BoardTemplate from './BoardTemplate';
import StuOrgTemplate from './StuOrgTemplate';
import Template from '../ImportantInformation/Template';
import BoardTemplate2 from './BoardTemplate2';

const url = [
  'anchorenza',
  'cadance',
  'finesse',
  'deb-soc',
  'xpressions',
  'lumiere',
  'montage',
  'lit-soc',
  'octaves',
];
const StudentOrganisationRoutes = () => {
  let ind = 0;
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
          <Route path='/' element={<BoardTemplate2 url='cult' />} />
          <Route
            path='/culturalboard'
            element={<BoardTemplate2 url='cult' />}
          />
          <Route
            path='/technicalboard'
            element={<BoardTemplate2 url='tech' />}
          />
          {[
            'Anchorenza & RadioG',
            'Cadence',
            'Finesse',
            'Deb-Soc',
            'Xpressions',
            'Lumiere',
            'Montage',
            'Lit-Soc',
            'Octaves',
          ].map((club, index) => {
            return (
              <Route
                path={`/${url[index]}`}
                key={ind++}
                element={
                  <StuOrgTemplate
                    url={`${String(club).split(' ')[0].toLowerCase()}`}
                  />
                }
              />
            );
          })}
          <Route path='/hab' element={<BoardTemplate url='hab' />} />
          <Route path='/sgc' element={<BoardTemplate url='sgc' />} />
          <Route
            path='/sail/'
            component={() => {
              window.location.href = 'https://iitg.ac.in/sail/';
              return null;
            }}
          />
          <Route
            path='/sab/'
            component={() => {
              window.location.href = 'https://www.iitg.ac.in/acad/';
              return null;
            }}
          />
          {[
            'Aeromodelling Club',
            'Astronomy Club',
            'Coding Club',
            'Consulting and Analytics Club',
            'Electronics Club',
            'Entreprenuership Cell',
            'Finance & Economics Club',
            'Green Automobile Club',
            'Robotics Club',
            'Science and Quiz Club ( ACUMEN )',
            'Techevince',
          ].map((club) => {
            return (
              <Route
                path={`/${String(club).split(' ')[0].toLowerCase()}`}
                key={ind++}
                element={
                  <StuOrgTemplate
                    url={`${String(club).split(' ')[0].toLowerCase()}`}
                  />
                }
              />
            );
          })}
          <Route
            path='/studentswelfare'
            element={<BoardTemplate url='swb' />}
          />
          {[
            'Saathi - The Counselling Service',
            'Social Service Club',
            'Youth Empowerment Club',
            'Rights and Responsibility Club',
            'Red Ribbon Club',
          ].map((club) => {
            return (
              <Route
                path={`/${String(club).split(' ')[0].toLowerCase()}`}
                key={ind++}
                element={
                  <StuOrgTemplate
                    url={`${String(club).split(' ')[0].toLowerCase()}`}
                  />
                }
              />
            );
          })}
        </Routes>
      </div>
    </div>
  );
};

export default StudentOrganisationRoutes;
