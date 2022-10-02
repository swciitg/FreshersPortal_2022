import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import { NavLink } from "react-router-dom";
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Navbar2 = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="fixed" sx={{top:'9.5%',backgroundColor:'#FFFFFF',color:'#000000'}}>
      <Container maxWidth="xl" >
      <Box sx={{ flexGrow: 1, display: 'flex',marginLeft:'5%', paddingLeft:'8%',paddingRight:'8%' }}>
          <NavLink
                 className='navbar'
                 to='/home'
                 style={({ isActive }) => 
                      (isActive ? {color: 'red'} : {color: 'blue'})}
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
                 style={({ isActive }) => 
                      (isActive ? {color: 'red'} : {color: 'blue'})}
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
                 style={({ isActive }) => 
                      (isActive ? {color: 'red'} : {color: 'blue'})}
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
                 style={({ isActive }) => 
                      (isActive ? {color: 'red'} : {color: 'blue'})}
               >
                 <Button
                   color='inherit'
                   size='large'
                   sx={{ ':hover': { fontWeight: 'bold' } }}
                 >
                   HOSTELS AND FACILITIES{' '}
                 </Button>
               </NavLink>
               <NavLink className='navbar' to='/events' style={({ isActive }) => 
                      (isActive ? {color: 'red'} : {color: 'blue'})}>
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
                 style={({ isActive }) => 
                      (isActive ? {color: 'red'} : {color: 'blue'})}
               >
                 <Button
                   color='inherit'
                   size='large'
                   sx={{ ':hover': { fontWeight: 'bold' } }}
                 >
                   STUDENT ORGANISATION
                 </Button>
               </NavLink>
               {/* <IconButton
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
               </IconButton> */}
           </Box>
        </Container>
    </AppBar>
  );
};
export default Navbar2;
