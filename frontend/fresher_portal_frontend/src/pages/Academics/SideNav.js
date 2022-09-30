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
import Collapse from '@mui/material/Collapse';
import ListItemButton from '@mui/material/ListItemButton';

const drawerWidth = 300;
const urls = ['bsbe','cl','cst','civil','cse','design','ece','hss','mnc','mech','phy']
function ResponsiveDrawer(props) {
  const [selectedIndex, setSelectedIndex] = React.useState(1);

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
      <Toolbar />
      <Divider />
      <List>
      <ListItemButton 
        selected = {selectedIndex <= 11}
        onClick={() => {handleListItemClick(0);handleClickOn();navigate('/academics/')}}>
        <ListItemText primaryTypographyProps={{ fontFamily:'Plus Jakarta Sans',fontWeight:500 }} primary="Departments" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
        {['Biosciences & Bioengineering','Chemical Engineering','Chemical Science & Technology', 'Civil Engineering','Computer Science & Engineering','Design','Electronics & Electrical Engineering','Humanities & Social Sciences','Mathematics','Mechanical Engineering','Physics'].map((text, index) => (
          <ListItem 
            button
            key={text} 
            onClick={()=> {
              handleListItemClick(index+1);
              navigate(`/academics/${urls[index]}`)
            }} >
            <ListItemButton selected={selectedIndex === index+1}>
              <ListItemText primaryTypographyProps={{ fontFamily:'Plus Jakarta Sans',fontWeight:500 }} primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
        </List>
      </Collapse>
      <ListItemButton
        selected={selectedIndex===12}
        onClick={() => {
          handleClickOff();
          handleListItemClick(12);
          navigate('/academics/branchchange/');
        }}
      >
        <ListItemText primaryTypographyProps={{ fontFamily:'Plus Jakarta Sans',fontWeight:500 }} primary="Branch Change" />
      </ListItemButton>
      <ListItemButton
        selected={selectedIndex===13}
        onClick={() => {
          handleClickOff();
          handleListItemClick(13);
          navigate('/academics/minor/');
        }}
      >
        <ListItemText primaryTypographyProps={{ fontFamily:'Plus Jakarta Sans',fontWeight:500 }} primary="Minor Discipline" />
      </ListItemButton>
      </List>
      <Divider />
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div>
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
              background: '#313A57',
              color: '#FFFFFF'
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

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;