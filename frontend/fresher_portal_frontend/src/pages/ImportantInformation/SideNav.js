import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigate = useNavigate();
  const [component, setComponent] = useState('Login');
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  console.log('hello ', `${process.env.REACT_APP_BASE_URL}`);
  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {[
          'Provisional ID Card',
          'Antiragging Affidavit',
          'Hostel Undertaking',
          'Code Of Conduct',
          'Guidelines for Photo & Signature',
          'Portal For Updating Your Personal Information',
          'Permanent Identity Card',
          'Bonafide Certificate',
          'IITG Girls’ Collective',
        ].map((text, index) => (
          <ListItem
            button
            key={text}
            onClick={() => {
              if (text === 'Provisional ID Card') {
                navigate('/important/provisional');
                setComponent('Provisional ID Card');
              } else if (text === 'Antiragging Affidavit') {
                navigate('/important/antiragging');
                //setComponent('Role');
              } else if (text === 'Hostel Undertaking') {
                navigate('/important/hostelundertaking');
                //setComponent('Role');
              } else if (text === 'Code Of Conduct') {
                navigate('/important/codeofconduct');
                //setComponent('Contacts');
              } else if (text === 'Guidelines for Photo & Signature') {
                navigate('/important/guidelines');
                //setComponent('Contacts');
              } else if (
                text === 'Portal For Updating Your Personal Information'
              ) {
                navigate('/important/portal');
                //setComponent('Contacts');
              } else if (text === 'Permanent Identity Card') {
                navigate('/important/permanentidentity');
                //setComponent('Contacts');
              } else if (text === 'Bonafide Certificate') {
                navigate('/important/bonafide');
                //setComponent('Contacts');
              } else if (text === 'IITG Girls’ Collective') {
                navigate('/important/iitggirlscollective');
                //setComponent('Contacts');
              }
            }}
          >
            <ListItemText>{text}</ListItemText>
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div style={{}}>
      {/* <Box sx={{ display: 'flex', }}> */}
      {/* <CssBaseline /> */}
      <AppBar
        position='fixed'
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            sx={{
              mr: 2,
              display: { sm: 'none' },
              position: 'relative',
              top: '0',
              left: '-100px',
            }}
          >
            <MenuIcon />
          </IconButton>
          <div style={{ display: 'flex', marginRight: '10px' }}>
            <h3 style={{ marginRight: '5px' }}>Important</h3>
            <h3 style={{ marginRight: '10px' }}>Information</h3>
          </div>
          {/* <Typography variant='h6' component='div' >
            Admin Panel
          </Typography> */}
        </Toolbar>
      </AppBar>
      <Box
        component='nav'
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label='mailbox folders'
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant='permanent'
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              // border:"3px solid pink"
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      {/* <Box
        component='main'
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
      
        <Toolbar />
        <Typography paragraph>{loadComponent()}</Typography>
      </Box> */}
      {/* </Box> */}
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
