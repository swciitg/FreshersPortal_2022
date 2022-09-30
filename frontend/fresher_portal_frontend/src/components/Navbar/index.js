import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import './Navbar.css';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { Stack, Button } from '@mui/material';
import { NavLink } from 'react-router-dom';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(0.5em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function NavBar2() {
  return (
    <Box sx={{ flexGrow: 1, position: 'fixed', top: '9%', width: '100%' }}>
      <AppBar position='static' sx={{ bgcolor: 'white', color: 'black' }}>
        <Toolbar>
          <Stack direction='row' spacing={5} alignItems='center'>
            <NavLink
              className='navbar'
              to='/home'
              activeStyle={{ fontWeight: 'bold', color: 'red' }}
              isActive={(match, location) => {
                console.log(match);
                console.log(location);
              }}
            >
              <Button
                color='inherit'
                size='large'
                sx={{ ':hover': { fontWeight: 'bold' } }}
              >
                HOME
              </Button>
            </NavLink>
            <NavLink
              className='navbar'
              to='/important'
              activeClassName='selected'
            >
              <Button
                color='inherit'
                size='large'
                sx={{ ':hover': { fontWeight: 'bold' } }}
              >
                IMPORTANT INFORMATION
              </Button>
            </NavLink>
            <NavLink
              className='navbar'
              to='/academics'
              activeClassName='selected'
            >
              <Button
                color='inherit'
                size='large'
                sx={{ ':hover': { fontWeight: 'bold' } }}
              >
                ACADEMICS
              </Button>
            </NavLink>
            <NavLink
              className='navbar'
              to='/hostels'
              activeClassName='selected'
            >
              <Button
                color='inherit'
                size='large'
                sx={{ ':hover': { fontWeight: 'bold' } }}
              >
                HOSTELS AND FACILITIES{' '}
              </Button>
            </NavLink>
            <NavLink className='navbar' to='/events' activeClassName='selected'>
              <Button
                color='inherit'
                size='large'
                sx={{ ':hover': { fontWeight: 'bold' } }}
              >
                EVENTS
              </Button>
            </NavLink>
            <NavLink
              className='navbar'
              to='/studentorganisation'
              activeClassName='selected'
            >
              <Button
                color='inherit'
                size='large'
                sx={{ ':hover': { fontWeight: 'bold' } }}
              >
                STUDENT ORGANISATION
              </Button>
            </NavLink>
            <IconButton
              size='large'
              edge='start'
              color='inherit'
              aria-label='open drawer'
              // sx={{ flexGrow: 1 }}
              sx={{ mr: 2 }}
            >
              <SearchIcon />
            </IconButton>
            <IconButton
              size='large'
              edge='start'
              color='inherit'
              aria-label='open drawer'
              // sx={{ flexGrow: 1 }}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>

            {/* <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder='Search…'
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search> */}
          </Stack>
          {/* <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder='Search…'
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

//_________  previous NavBarCode

// import React from "react";
// import Header from "../../pages/AdmittedStudents/Header";
// import {
//   Nav,
//   NavLink,
//   Bars,
//   NavMenu,
//   NavBtn,
//   NavBtnLink,
// } from "./NavbarElememts";
// import "./Header.css";

// const Navbar = () => {
//   return (
//     <>
//       <Nav>
//         <Bars />

//         <NavMenu>
//           <NavLink to="/home" activeStyle>
//             HOME
//           </NavLink>
//           <NavLink to="/important" activeStyle>
//             IMPORTANT INFORMATION
//           </NavLink>
//           <NavLink to="/academics" activeStyle>
//             ACADEMICS
//           </NavLink>
//           <NavLink to="/hostels/facilities" activeStyle>
//             HOSTELS / FACILITIES
//           </NavLink>
//           <NavLink to="/events" activeStyle>
//             EVENTS
//           </NavLink>
//           <NavLink to="/studentorganisation" activeStyle>
//             STUDENT ORGANISATION
//           </NavLink>
//           <img src="/AdmittedStudents/Search.svg" id="search" />
//           <img src="/AdmittedStudents/Menu.svg" id="menu" />
//           {/* Second Nav */}
//           {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
//         </NavMenu>

//         {/* <NavBtn>
//           <NavBtnLink to="/signin">Sign In</NavBtnLink>
//         </NavBtn> */}
//       </Nav>
//       <img src="/AdmittedStudents/Line 78.svg" id="line" />
//     </>
//   );
// };

// export default Navbar;
