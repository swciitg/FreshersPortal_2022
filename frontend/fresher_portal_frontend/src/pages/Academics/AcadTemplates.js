import React, { useState, useEffect } from 'react';
import './Academics.css';
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
const AcadTemplates = (props) => {
  const [info, setInfo] = useState([]);
  return (
    <div className='page'>
      <div className='heading'>
        <div className='academics_pre-cursor'></div>
        <p className='academics_heading-text'>{props.title}</p>
      </div>
      <div className='academics_description'>
        <img src={`/assets/images/${props.image}.jpg`} className='image' />
        <div className='academics_description-text'>
          {props.description}
        </div>
      </div>
      <Box sx={{ width: '1400px' }} className='box'>
        <Grid container rowSpacing={2} columnSpacing={0}>
          <Grid item xs={6}>
            <Item className='item'>
              <p className='post-text'>
                HoD : ABC
              </p>
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item className='item'>
              <p className='post-text'>
                Website Link
              </p>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default AcadTemplates;
