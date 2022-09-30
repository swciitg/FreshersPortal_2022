import React from 'react';
import './Home.css';
import  NavBar  from '../../components/Navbar/Navbar_1';
import NavBar2 from '../../components/Navbar/index';
import {NavLink} from '../../components/Navbar/NavbarElements';
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

        <NavLink className='navbar' exact to='/home' activeClassName='highlighted'>
          Admitted Student
        </NavLink>
      </div>
    </div>
  );
}
