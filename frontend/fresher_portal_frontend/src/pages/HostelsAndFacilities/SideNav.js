import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Collapse from '@mui/material/Collapse';
import ListItemButton from '@mui/material/ListItemButton';
import Navbar from '../../components/Navbar/Navbar1';
import Navbar2 from '../../components/Navbar/Navbar2';
import StickyFooter from '../../components/StickyFooter';

const drawerWidth = 280;

const useStyles = makeStyles({
  root: {
    '&$selected': {
      backgroundColor: ' #5468FD',
      fontWeight:'800'
    },
  },
  selected: {
    color: '#FFFFFF',
    backgroundColor:' #5468FD'
  },
});

function ResponsiveDrawer(props) {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleListItemClick = (index) => {
    setSelectedIndex(index);
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
  const classes = useStyles();
  const drawer = (
    <div>
      <Divider />
      <List>
      <ListItemButton 
        selected = {selectedIndex <= 13}
        onClick={() => {handleListItemClick(0);handleClickOn();navigate('/hostels/')}}>
        <ListItemText primaryTypographyProps={{ fontFamily:'Plus Jakarta Sans',fontWeight:500 }} primary="Hostels" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
        {['Barak','Bramhaputra','Dhansiri', 'Dibang','Dihing','Disang','Kameng','Kapili','Manas','Lohit','Siang','Subansiri','Umiam'].map((text, index) => (
          <ListItem 
            button
            key={text} 
            onClick={()=> {
              handleListItemClick(index+1);
              navigate(`/hostels/${text.toLowerCase()}`)
            }} >
            <ListItemButton selected={selectedIndex === index+1} classes={{ root: classes.root, selected: classes.selected }}>
              
              <ListItemText primaryTypographyProps={{ backgroundColor:'inherit',color:'inherit', fontFamily:'Plus Jakarta Sans',fontWeight:'inherit' }} primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
        </List>
      </Collapse>
      <ListItemButton
        selected={selectedIndex==14}
        classes={{ root: classes.root, selected: classes.selected }}
        onClick={() => {
          handleClickOff();
          handleListItemClick(14);
          navigate('/hostels/facilities/');
        }}
      >

        <ListItemText primaryTypographyProps={{ fontFamily:'Plus Jakarta Sans',fontWeight:'inherit' }} primary="Facilities" />
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
                bottom:'10%',
                boxSizing: 'border-box',
                width: drawerWidth,
                background: '#313A57',
                color: '#FFFFFF',
                height: '81%'
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
  