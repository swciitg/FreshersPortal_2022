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
const Mathematics = (props) => {
  return (
    <div className='page'>
      <div className='heading'>
        <div className='pre-cursor'></div>
        <p className='heading-text'>Mathematics and Computing</p>
      </div>
      <div className='description'>
      <img src={`/assets/images/Physics.jpg`} className='image'/>
        <div className='description-header'> {props.description}</div>
      </div>
      <Box sx={{ width: '1400px' }} className='box'>
        <Grid container rowSpacing={2} columnSpacing={0}>
          <Grid item xs={6}>
            <Item className='item' >HOD : {props.HOD}</Item>
            </Grid>
              <Grid item xs={6}>
            <Item className='item'>l</Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Mathematics;