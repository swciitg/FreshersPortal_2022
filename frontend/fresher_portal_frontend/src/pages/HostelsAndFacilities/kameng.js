import React from 'react';
import './HostelAndFacilities.css';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1374C5' : '#313A57',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const Kameng = (props) => {
  return (
    <div className='page'>
      <div className='heading'>
        <div className='hostel_pre-cursor'></div>
        <p className='hostel_heading-text'>Kameng Hostel</p>
      </div>
      <div className='hostel_description'>
      <img src={`/assets/images/kameng.jpg`} className='image'/>
        <div className='hostel_description-text'> {props.description}</div>
      </div>
      <Box sx={{ width: '1400px' }} className='box'>
        <Grid container rowSpacing={2} columnSpacing={0}>
          <Grid item xs={6}>
            <Item className='item'><p className='post-text'>Hostel Warden : {props.warden}</p></Item>
          </Grid>
          <Grid item xs={6}>
            <Item className='item'><p className='post-text'>2</p></Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Kameng;