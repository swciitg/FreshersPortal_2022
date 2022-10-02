import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import { NavLink } from "react-router-dom";
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';

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
    <AppBar position="fixed" sx={{top:'9%',backgroundColor:'#FFFFFF',color:'#000000'}}>
      <Container maxWidth="xl" >
      <Box sx={{ flexGrow: 1, display: 'flex',paddingLeft:'15%',paddingRight:'15%' }}>
          <NavLink
                 className='navbar'
                 to='/home'
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
               >
                 <Button
                   color='inherit'
                   size='large'
                   sx={{ ':hover': { fontWeight: 'bold' } }}
                 >
                   HOSTELS AND FACILITIES{' '}
                 </Button>
               </NavLink>
               <NavLink className='navbar' to='/events'>
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
           </Box>
        </Container>
    </AppBar>
  );
};
export default Navbar2;
