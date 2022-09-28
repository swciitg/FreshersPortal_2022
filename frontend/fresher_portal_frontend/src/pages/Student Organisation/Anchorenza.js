import React from 'react';
import './StudentOrganisation.css';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

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
        <div className='organisation_pre-cursor'></div>
        <p className='organisation_heading-text'>Anchorenza & RadioG</p>
      </div>
      <div className='organisation_description'>
      <img src="/assets/images/anchorenza.jpg" className='image'/>
        <div className='organisation_description-text'> {props.description}</div>
      </div>
    </div>
  );
};

export default Anchorenza;