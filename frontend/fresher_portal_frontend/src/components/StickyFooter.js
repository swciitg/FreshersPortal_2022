import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


export default function StickyFooter() {
  return (
    <footer style={{ backgroundColor:'#000000', color: '#FFFFFF', position: 'fixed', bottom: 0,textAlign:'center',width:'100%',zIndex:'5'}}>
      <Typography color="inherit" sx={{fontFamily:'Plus Jakarta Sans',fontSize: '14px'}}>
      {'| © '}
        2022 SWC, All rights reserved | Designed, Developed and Maintained by Student Web Committee of IIT, Guwahati |
      </Typography>
    </footer>
  );
}