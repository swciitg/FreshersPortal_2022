import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './SideBar';
import axios from 'axios';
import Provisional from './Provisional';
import Antiragging from './Antiragging';
import HostelUndertaking from './HostelUndertaking';
import Bonafide from './Bonafide';
import CodeOfConduct from './CodeOfConduct';
import Guidelines from './Guidelines';
import IITGGirlsCollective from './IITGGirlsCollective';
import PermanentIdentity from './PermanentIdentity';
import Portal from './Portal';

const ImportantInformationRoutes = () => {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = () => {
  //   axios
  //     .get('http://127.0.0.1:8000/api/open2/tech', {
  //       headers: {
  //         'Access-Control-Allow-Origin': '*',
  //         'Content-Type': 'application/json',
  //       },
  //     })
  //     .then((response) => {
  //       console.log(response.data);
  //     })
  //     .catch((error) => console.log('error', error));
  // };

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />

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
          <Route path='/' element={<Provisional />} />
          <Route path='/provisional' element={<Provisional />} />
          <Route path='/antiragging' element={<Antiragging />} />
          <Route path='/hostelundertaking' element={<HostelUndertaking />} />
          <Route path='/bonafide' element={<Bonafide />} />
          <Route path='/codeofconduct' element={<CodeOfConduct />} />
          <Route path='/guidelines' element={<Guidelines />} />
          <Route path='/iitggirlscollective' element={<IITGGirlsCollective />} />
          <Route path='/permanentidentity' element={<PermanentIdentity />} />
          <Route path='/portal' element={<Portal />} />
        </Routes>
      </div>
    </div>
  );
};

export default ImportantInformationRoutes;
