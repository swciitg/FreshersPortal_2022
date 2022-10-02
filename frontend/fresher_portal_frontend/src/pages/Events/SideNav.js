import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
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
import Collapse from '@mui/material/Collapse';
import ListItemButton from '@mui/material/ListItemButton';
import Navbar from '../../components/Navbar/Navbar1';
import Navbar2 from '../../components/Navbar/Navbar2';
import StickyFooter from '../../components/StickyFooter';

const drawerWidth = 280;

function ResponsiveDrawer(props) {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleListItemClick = (index) => {
    setSelectedIndex(index);
    console.log(index);
  };
  const [open, setOpen] = React.useState(true);
  const handleClickOn = () => {
    setOpen(!open);
  };
  const handleClickOff = () => {
    setOpen(false);
  };
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigate = useNavigate();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  console.log('hello ', `${process.env.REACT_APP_BASE_URL}`);
  const drawer = (
    <div>
      <Divider />
      <List>
        <ListItemButton
          selected={selectedIndex == 0}
          onClick={() => {
            handleClickOff();
            handleListItemClick(0);
            navigate('/events/alcheringa/');
          }}
        >
          <ListItemText
            primaryTypographyProps={{
              fontFamily: 'Plus Jakarta Sans',
              fontWeight: 500,
            }}
            primary='Alcheringa'
          />
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex == 1}
          onClick={() => {
            handleClickOff();
            handleListItemClick(1);
            navigate('/events/advaya/');
          }}
        >
          <ListItemText
            primaryTypographyProps={{
              fontFamily: 'Plus Jakarta Sans',
              fontWeight: 500,
            }}
            primary='Advaya'
          />
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex > 1 && selectedIndex < 6}
          onClick={() => {
            handleListItemClick(2);
            handleClickOn();
            navigate('/events/interhostelevents');
          }}
        >
          <ListItemText
            primaryTypographyProps={{
              fontFamily: 'Plus Jakarta Sans',
              fontWeight: 500,
            }}
            primary='Inter-Hostel Events'
          />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout='auto' unmountOnExit>
          <List component='div' disablePadding>
            {['Kriti', 'Manthan', 'Spardha'].map((text, index) => (
              <ListItem
                button
                key={text}
                onClick={() => {
                  handleListItemClick(index + 1);
                  navigate(`/events/interhostelevents/${text.toLowerCase()}`);
                }}
              >
                <ListItemButton selected={selectedIndex === index + 1}>
                  <ListItemText
                    primaryTypographyProps={{
                      fontFamily: 'Plus Jakarta Sans',
                      fontWeight: 500,
                    }}
                    primary={text}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Collapse>
        <ListItemButton
          selected={selectedIndex == 6}
          onClick={() => {
            handleClickOff();
            handleListItemClick(6);
            navigate('/events/reflux/');
          }}
        >
          <ListItemText
            primaryTypographyProps={{
              fontFamily: 'Plus Jakarta Sans',
              fontWeight: 500,
            }}
            primary='Reflux'
          />
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex == 7}
          onClick={() => {
            handleClickOff();
            handleListItemClick(7);
            navigate('/events/techniche/');
          }}
        >
          <ListItemText
            primaryTypographyProps={{
              fontFamily: 'Plus Jakarta Sans',
              fontWeight: 500,
            }}
            primary='Techniche'
          />
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex == 8}
          onClick={() => {
            handleClickOff();
            handleListItemClick(8);
            navigate('/events/udgam/');
          }}
        >
          <ListItemText
            primaryTypographyProps={{
              fontFamily: 'Plus Jakarta Sans',
              fontWeight: 500,
            }}
            primary='Udgam'
          />
        </ListItemButton>
      </List>
      <Divider />
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

    return (
      <div style={{}}>
        <Navbar/>
        <Navbar2/>
        <StickyFooter/>
        <Box
          component='nav'
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        >
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
                position:'relative',
                boxSizing: 'border-box',
                width: drawerWidth,
                background: '#313A57',
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
                top:'16%',
                boxSizing: 'border-box',
                width: drawerWidth,
                background: '#313A57',
                color: '#FFFFFF',
              },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
      </div>
    );
  }
  
export default ResponsiveDrawer;
  