import React from 'react';
import './Template.css';
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
const Barak = (props) => {
  return (
    <div className='page'>
      <div className='heading'>
        <div className='pre-cursor'></div>
        <p className='heading-text'>Barak</p>
      </div>
      <div className='description'>
      <img src={`/assets/images/barak.jpg`} className='image'/>
        <div className='description-header'> {props.description}</div>
      </div>
      <Box sx={{ width: '1400px' }} className='box'>
        <Grid container rowSpacing={2} columnSpacing={0}>
          <Grid item xs={6}>
            <Item className='item' >Hostel Warden : {props.warden}</Item>
            </Grid>
              <Grid item xs={6}>
            <Item className='item'>2</Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Template;