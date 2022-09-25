import React from 'react';
import './StudentOrganisation.css';
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
const Anchorenza = (props) => {
  return (
    <div className='page'>
      <div className='heading'>
        <div className='pre-cursor'></div>
        <p className='heading-text'>Anchorenza & RadioG</p>
      </div>
      <div className='description'>
      <img src="/assets/images/anchorenza.jpg" className='image'/>
        <div className='description-text'> {props.description}</div>
      </div>
    </div>
  );
};

export default Anchorenza;