import React from 'react';
import './Home.css';
import  NavBar  from '../../components/Navbar/Navbar1';
import { NavLink } from 'react-router-dom';
import StickyFooter from '../../components/StickyFooter';

export default function Home() {
  return (
    <div
      id='container'
    >
      <img className='home_img' src='/assets/images/homescreen.jpg' alt='' />
      <NavBar/>
      <div id='trs'>
        <div id='d1'>
          <div id='ha'>WELCOME TO</div>
          <div id='hb'>IIT GUWAHATI</div>
        </div>

        <NavLink className='navbar' exact to='/home' id='AS'>
          Admitted Student
        </NavLink>
      </div>
    </div>
  );
}
