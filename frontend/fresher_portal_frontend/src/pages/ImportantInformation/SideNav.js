import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import ListItemButton from '@mui/material/ListItemButton';
import Navbar from '../../components/Navbar/Navbar1';
import Navbar2 from '../../components/Navbar/Navbar2';
import StickyFooter from '../../components/StickyFooter';

const drawerWidth = 240;

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
  const [selectedIndex, setSelectedIndex] = React.useState(1);

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
  const [component, setComponent] = useState('Login');
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const classes = useStyles();
  const drawer = (
    <div>
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
              handleListItemClick(index + 1);
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
            <ListItemButton selected={selectedIndex === index + 1} classes={{ root: classes.root, selected: classes.selected }}>
              <ListItemText
                primaryTypographyProps={{
                  fontFamily: 'Plus Jakarta Sans',
                  fontWeight: 'inherit',
                }}
                primary={text}
              />
            </ListItemButton>
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
        <Navbar />
        <Navbar2 />
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
                position: 'relative',
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
                top: '16%',
                boxSizing: 'border-box',
                width: drawerWidth,
                background: '#313A57',
                color: '#FFFFFF',
                height: '81%',
              },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
        <StickyFooter />
      </div>
    );
  }
  
  export default ResponsiveDrawer;
  