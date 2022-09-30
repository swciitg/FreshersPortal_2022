import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

function Copyright() {
  return (
    <Typography color="inherit" sx={{fontFamily:'Plus Jakarta Sans',fontSize: '14px'}}>
      {'| © '}
        2022 SWC, All rights reserved | Designed, Developed and Maintained by Student Web Committee of IIT, Guwahati |
    </Typography>
  );
}

export default function StickyFooter() {
  return (
    <Box
      sx={{
        position:'fixed',
        width:'100%',
        bottom:'0.1rem'
      }}
    >
      <CssBaseline />
      
      <Box
        component="footer"
        sx={{
          py: 1,
          px: 2,
          mt: 'auto',
          backgroundColor: '#000000',
          color:'#FFFFFF'
        }}
      > 
        <Container maxWidth="md">
          <Copyright />
        </Container>
      </Box>
    </Box>
  );
}