import React from 'react';
import './Home.css';
import { NavLink } from '../../components/Navbar/NavbarElememts';

export default function Home() {
  return (
    <div
      id='container'
      // style={{
      //   backgroundImage: `url(/AdmittedStudents/guesthouse1.jpg)`
      // }}
    >
      <img className='home_img' src='/AdmittedStudents/guesthouse1.jpg' alt='' />
      <div id='trs'>
        <div id='d1'>
          <div id='ha'>WELCOME TO</div>
          <div id='hb'>IIT GUWAHATI</div>
        </div>

        <NavLink to='/admittedstudent' id='AS'>
          Admitted Student
        </NavLink>
      </div>
    </div>
  );
}
