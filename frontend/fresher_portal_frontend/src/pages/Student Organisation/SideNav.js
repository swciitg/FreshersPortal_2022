import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import './StudentOrganisation.css';
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
import Collapse from '@mui/material/Collapse';
import ListItemButton from '@mui/material/ListItemButton';
import { color } from '@mui/system';
import Navbar from '../../components/Navbar/Navbar1';
import Navbar2 from '../../components/Navbar/Navbar2';
import StickyFooter from '../../components/StickyFooter';

const drawerWidth = 330;

const redir = (url) => {
  window.location.replace(url);
};
function ResponsiveDrawer(props) {
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (index) => {
    setSelectedIndex(index);
  };
  const [open, setOpen] = React.useState(true);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const handleClickOn = () => {
    setOpen(!open);
    setOpen3(false);
    setOpen2(false);
  };
  const handleClickOff = () => {
    setOpen(false);
  };
  const handleClickOn2 = () => {
    setOpen2(!open2);
    setOpen3(false);
    setOpen(false);
  };
  const handleClickOff2 = () => {
    setOpen2(false);
  };
  const handleClickOn3 = () => {
    setOpen3(!open3);
    setOpen2(false);
    setOpen(false);
  };
  const handleClickOff3 = () => {
    setOpen3(false);
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
          selected={selectedIndex <= 9}
          onClick={() => {
            handleClickOn();
            handleListItemClick(0);
            navigate('/studentorganisation/');
          }}
        >
          <ListItemText
            primaryTypographyProps={{
              fontFamily: 'Plus Jakarta Sans',
              fontWeight: 500,
            }}
            primary='Cultural Board'
          />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout='auto' unmountOnExit>
          <List component='div' disablePadding>
            {[
              'Anchorenza & RadioG',
              'Cadance',
              'Finesse',
              'Deb-Soc',
              'Xpressions',
              'Lumiere',
              'Montage',
              'Lit-Soc',
              'Octaves',
            ].map((text, index) => (
              <ListItem
                button
                key={text}
                onClick={() => {
                  handleListItemClick(index + 1);
                  navigate(
                    `/studentorganisation/${text
                      .split(' ')[0]
                      
                      .toLowerCase()}`
                  );
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
          selected={selectedIndex === 10}
          onClick={() => {
            handleClickOff();
            handleClickOff2();
            handleListItemClick(10);
            navigate('/studentorganisation/hab/');
          }}
        >
          <ListItemText
            primaryTypographyProps={{
              fontFamily: 'Plus Jakarta Sans',
              fontWeight: 500,
            }}
            primary='Hostel Affairs Board'
          />
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex >= 11 && selectedIndex <= 22}
          onClick={() => {
            handleClickOn2();
            handleListItemClick(0);
            navigate('/studentorganisation/technicalboard');
          }}
        >
          <ListItemText
            primaryTypographyProps={{
              fontFamily: 'Plus Jakarta Sans',
              fontWeight: 500,
            }}
            primary='Technical Board'
          />
          {open2 ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open2} timeout='auto' unmountOnExit>
          <List component='div' disablePadding>
            {[
              'Aeromodelling Club',
              'Astronomy Club',
              'Coding Club',
              'Consulting and Analytics Club',
              'Electronics Club',
              'Entreprenuership Cell',
              'Finance & Economics Club',
              'Green Automobile Club',
              'Robotics Club',
              'Science and Quiz Club ( ACUMEN )',
              'Techevince',
            ].map((text, index) => (
              <ListItem
                button
                key={text}
                className='sidebar-text'
                onClick={() => {
                  handleListItemClick(index + 12);
                  navigate(
                    `/studentorganisation/${text
                      .split(' ')[0]
                      .replace(/[&\/\\#,+()$~%.'":*?<>{}-]/g, '')
                      .toLowerCase()}`
                  );
                }}
              >
                <ListItemButton selected={selectedIndex === index + 12}>
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
          selected={selectedIndex === 23}
          onClick={() => {
            handleClickOff();
            handleClickOff2();
            handleListItemClick(23);
            redir('https://iitg.ac.in/sail/');
          }}
        >
          <ListItemText
            primaryTypographyProps={{
              fontFamily: 'Plus Jakarta Sans',
              fontWeight: 500,
            }}
            primary='SAIL'
          />
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 24}
          onClick={() => {
            handleClickOff();
            handleClickOff2();
            handleListItemClick(24);
            redir('https://www.iitg.ac.in/acad/');
          }}
        >
          <ListItemText
            primaryTypographyProps={{
              fontFamily: 'Plus Jakarta Sans',
              fontWeight: 500,
            }}
            primary="Students' Academic Board"
          />
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 25}
          onClick={() => {
            handleClickOff();
            handleClickOff2();
            handleListItemClick(25);
            navigate('/studentorganisation/sgc/');
          }}
        >
          <ListItemText
            primaryTypographyProps={{
              fontFamily: 'Plus Jakarta Sans',
              fontWeight: 500,
            }}
            primary="Students' Gymkhana Council"
          />
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex >= 25 && selectedIndex <= 30}
          onClick={() => {
            handleClickOn3();
            handleListItemClick(0);
            navigate('/studentorganisation/studentswelfare');
          }}
        >
          <ListItemText
            primaryTypographyProps={{
              fontFamily: 'Plus Jakarta Sans',
              fontWeight: 500,
            }}
            primary="Students' Welfare Board"
          />
          {open3 ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open3} timeout='auto' unmountOnExit>
          <List component='div' disablePadding>
            {[
              'Saathi- The Counselling Service',
              'Social Service Club',
              'Youth Empowerment Club',
              'Rights and Responsibility Club',
              'Red Ribbon Club',
            ].map((text, index) => (
              <ListItem
                button
                key={text}
                onClick={() => {
                  handleListItemClick(index + 26);
                  navigate(
                    `/studentorganisation/${text
                      .split(' ')[0]
                      .replace(/[&\/\\#,+()$~%.'":*?<>{}-]/g, '')
                      .toLowerCase()}`
                  );
                }}
              >
                <ListItemButton selected={selectedIndex === index + 25}>
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
      <Box
        component='nav'
        sx={{ height: '90%',width: { sm: drawerWidth }, flexShrink: { sm: 0 } ,paddingBottom:'3%'}}
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
            display: 'flex',
            '& .MuiDrawer-paper': {
              position:'relative',
              overflow: 'scroll' ,
              paddingBottom:'3%',
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
            display: 'absolute',
            '& .MuiDrawer-paper': {
              top:'16%',
              bottom:'10%',
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
      <StickyFooter/>
    </div>
  );
}

export default ResponsiveDrawer;
