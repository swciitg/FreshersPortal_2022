import React from "react";
import Header from "../../pages/AdmittedStudents/Header";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElememts";
import "./Header.css";

const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />

        <NavMenu>
          <NavLink to="/home" activeStyle>
            HOME
          </NavLink>
          <NavLink to="/important" activeStyle>
            IMPORTANT INFORMATION
          </NavLink>
          <NavLink to="/academics" activeStyle>
            ACADEMICS
          </NavLink>
          <NavLink to="/hostels/facilities" activeStyle>
            HOSTELS / FACILITIES
          </NavLink>
          <NavLink to="/events" activeStyle>
            EVENTS
          </NavLink>
          <NavLink to="/studentorganisation" activeStyle>
            STUDENT ORGANISATION
          </NavLink>
          <img src="/AdmittedStudents/Search.svg" id="search" />
          <img src="/AdmittedStudents/Menu.svg" id="menu" />
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>

        {/* <NavBtn>
          <NavBtnLink to="/signin">Sign In</NavBtnLink>
        </NavBtn> */}
      </Nav>
      <img src="/AdmittedStudents/Line 78.svg" id="line" />
    </>
  );
};

export default Navbar;
